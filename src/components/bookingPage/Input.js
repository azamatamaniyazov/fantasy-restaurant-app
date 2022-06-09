function Input({ register, name, errors, text, max, min, pattern, setValue }) {
  return (
    <div className="text-center flex flex-col">
      <input
        {...register(name, {
          pattern: {
            value: pattern,
            message: "вы ввели неправильный номер",
          },
          required: "заполните поле",
          maxLength: {
            value: max,
            message: "не более 20 символов",
          },
          minLength: {
            value: min,
            message: "больше 2 символов",
          },
        })}
        type="text"
        onFocus={(e) =>
          setValue && setValue(name, e.target.value ? e.target.value : "+998")
        }
        placeholder={text}
        className="border-gray-300 rounded-lg mr-4"
      />
      {errors && <small className="text-red-400">{errors.message}</small>}
    </div>
  );
}

export default Input;
