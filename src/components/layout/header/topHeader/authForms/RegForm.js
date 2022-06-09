import { useState } from "react";
import { useForm } from "react-hook-form";
import { registration, login } from "../../../../../api/endpoints/auth";
import useAuth from "../../../../../hooks/useAuth";

function RegForm() {
  const {
    register,
    formState: { errors },
    reset,
    getValues,
    setValue,
    handleSubmit,
  } = useForm();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const onSubmit = async (data) => {
    const phone = data.phone.slice(4, data.phone.lenth);
    try {
      setIsLoading(true);
      await registration({ ...data, phone });
      const { data: loginData } = await login({ ...data, phone });
      auth.setToken(loginData.token);
      auth.setUser(loginData.user);
      reset();
    } catch (e) {
      if (e.response.status === 422) {
        setAuthError("номер уже зарегистрирован");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h3 className="text-xl text-title mb-2">Регистрация</h3>
      <input
        type="text"
        placeholder="Имя"
        {...register("name", {
          required: "заполните поле",
          minLength: { value: 2, message: "не менее 2 символов" },
          maxLength: { value: 20, message: "не более 20 символов" },
        })}
        className="text-sm py-2 px-1 border-border outline-0 rounded-lg"
      />
      {errors?.name && (
        <small className="text-center text-red-400">
          {errors.name.message}
        </small>
      )}
      <input
        type="tel"
        placeholder="Телефон"
        onFocus={() => {
          setValue(
            "phone",
            getValues("phone") ? `${getValues("phone")}` : "+998"
          );
          setAuthError(null);
        }}
        {...register("phone", {
          required: "заполните поле",
          pattern: {
            value:
              /^\+998(90|91|93|94|95|98|99|33|97|71|66)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/,
            message: "введите номер телефона правильно",
          },
        })}
        className="text-sm py-2 px-1 border-border outline-0 rounded-lg my-2"
      />
      {errors?.phone && (
        <small className="text-center text-red-400">
          {errors.phone.message}
        </small>
      )}
      <button onClick={handleSubmit(onSubmit)} className="btn-primary p-1.5">
        {isLoading ? "Загрузка..." : "Отправить"}
      </button>
      {authError && (
        <small className="text-center text-red-400">{authError}</small>
      )}
    </>
  );
}

export default RegForm;
