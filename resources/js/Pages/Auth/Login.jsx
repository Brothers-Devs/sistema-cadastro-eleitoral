import {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';

export default function Login({status, canResetPassword}) {
  const {data, setData, post, processing, errors, reset} = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <GuestLayout>
      <Head title="Login"/>

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="E-mail"/>

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            placeholder="Informe seu e-mail"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
          />

          <InputError message={errors.email} className="mt-2"/>
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Senha"/>

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            placeholder="Informe sua senha"
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="mt-2"/>
        </div>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton
            className="bg-black p-3 font-medium text-white hover:bg-opacity-80"
            disabled={processing}
          >
            Acessar
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
