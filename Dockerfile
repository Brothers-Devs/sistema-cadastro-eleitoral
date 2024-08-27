# Use the official PHP image as the base image
FROM php:8.1-fpm

ARG APP_STAGE

ENV APP_STAGE=$APP_STAGE

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libzip-dev \
    zip \
    nodejs \
    npm \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql gd zip \
    && docker-php-ext-install pcntl

# Instalar Redis extension
RUN pecl install redis \
    && docker-php-ext-enable redis

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing application directory contents
COPY . /var/www

COPY ./composer.* ./

# Run composer install
RUN if [ "$APP_STAGE" == "local" ]; then \
    composer install --no-scripts --prefer-dist --no-autoloader; \
    else \
    composer install --no-scripts --prefer-dist --no-autoloader --no-dev; \
    fi

RUN composer dump-autoload --optimize --no-scripts \
    && chown -R www-data:www-data /var/www

# Change current user to www
USER www-data

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
