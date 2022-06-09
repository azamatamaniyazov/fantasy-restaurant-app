import PriceBar from "../basket/PriceBar";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDateError } from "../../components/componentsSlice";
import Input from "./Input";
import Modal from "./Modal";

function BookingPage() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const { dateError } = useSelector((state) => state.component);
  const dispatch = useDispatch();

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <div className="flex flex-col items-center">
        <input
          className="p-3 cursor-pointer text-center w-max outline-none bg-gray-100 rounded-xl"
          onClick={onClick}
          onBlur={() => dispatch(setDateError(null))}
          value={value}
          ref={ref}
          readOnly={true}
          placeholder="Выберите дату и время"
        />
        {dateError && <small className="text-custom-red">{dateError}</small>}
      </div>
    );
  });

  return (
    <>
      <div className="max-w-6xl mx-auto px-2 flex flex-row justify-around relative">
        <div className="h-max bg-white mr-4 py-1 px-3 shadow-def rounded-2xl flex-grow-3 flex-shrink basis-0">
          <form className="booking-form p-6 flex flex-col ">
            <div className="flex mb-4">
              <Input
                register={register}
                errors={errors?.name}
                max={20}
                min={3}
                name="name"
                text="Имя"
              />
              <Input
                register={register}
                errors={errors?.phone}
                pattern={
                  /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71|66)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/
                }
                name="phone"
                text="Телефон"
                setValue={setValue}
              />
            </div>

            <div className="flex items-center">
              <select
                {...register("floor")}
                className="border-gray-300 h-max rounded-lg"
              >
                <option value="0" key="0">
                  Выберите этаж
                </option>
                <option value="1" key="1">
                  1
                </option>
                <option value="2" key="2">
                  2
                </option>
              </select>
              <select
                {...register("place")}
                className="border-gray-300 h-max rounded-lg mx-4"
              >
                <option value="0" key="0">
                  Выберите место
                </option>
                <option value="1" key="1">
                  Столик
                </option>
                <option value="2" key="2">
                  Кабинка
                </option>
              </select>
              <div>
                <Controller
                  name="date"
                  rules={{ required: "выберите дате и время" }}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <div className="flex flex-col items-center">
                        <DatePicker
                          placeholderText="Выберите дату"
                          onChange={onChange}
                          selected={value}
                          minDate={new Date()}
                          minTime={new Date().setHours(
                            (new Date().setMinutes(new Date(), 0), 9)
                          )}
                          maxTime={new Date().setHours(
                            (new Date().setMinutes(new Date(), 0), 22)
                          )}
                          showTimeSelect
                          filterTime={filterPassedTime}
                          dateFormat="d/MM/yyyy   HH:mm"
                          timeFormat="HH:mm"
                          timeIntervals={60}
                          customInput={<CustomDateInput />}
                        />
                        {error && (
                          <small className="text-custom-red">
                            {error.message}
                          </small>
                        )}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <PriceBar handleSubmit={handleSubmit} reset={reset} />
      </div>
      <Modal />
    </>
  );
}

export default BookingPage;
