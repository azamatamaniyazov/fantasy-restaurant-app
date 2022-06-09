import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../../../api/endpoints/auth";
import useAuth from "../../../../../hooks/useAuth";

function LoginForm() {
  const {
    register,
    formState: { errors },
    reset,
    getValues,
    setValue,
    handleSubmit,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const auth = useAuth();

  const onLogin = async (data) => {
    const phone = data.phone.slice(4, data.phone.lenth);
    try {
      setIsLoading(true);
      const { data: loginData } = await login({ ...data, phone });
      auth.setToken(loginData.token);
      auth.setUser(loginData.user);
      reset();
      setLoginError(null);
    } catch (e) {
      if (e.response.status === 401) {
        setLoginError("вы не зарегистрированы");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <h3 className="text-xl text-title mb-2">Войти</h3>
      <input
        type="text"
        placeholder="Имя"
        {...register("name", { required: "заполните поле" })}
        className="text-sm py-2 px-1 border-border outline-0 rounded-lg"
      />
      {errors?.name && (
        <small className="text-red-400">{errors.name.message}</small>
      )}
      <input
        type="tel"
        placeholder="Телефон"
        onFocus={() =>
          setValue(
            "phone",
            getValues("phone") ? `${getValues("phone")}` : "+998"
          )
        }
        {...register("phone", { required: "заполните поле" })}
        className="text-sm py-2 px-1 border-border outline-0 rounded-lg my-2"
      />
      {errors?.phone && (
        <small className="text-red-400">{errors.phone.message}</small>
      )}
      <button onClick={handleSubmit(onLogin)} className="btn-primary p-1.5">
        {isLoading ? "Загрузка..." : "Вход"}
      </button>
      {loginError && <small className="text-red-400">{loginError}</small>}
    </>
  );
}

export default LoginForm;
