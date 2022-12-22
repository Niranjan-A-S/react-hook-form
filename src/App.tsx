import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

export const App = () => {
  enum GenderEnum {
    male = "male",
    female = "female",
    other = "other"
  };


  interface IFormInput {
    firstName: string;
    lastName: string;
    gender: GenderEnum;
  };

  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: 'Emma',
      lastName: 'Watson',
      gender: GenderEnum.female
    }
  });
  const submitData: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(submitData)}>

      <label >First Name</label>
      <input {...register("firstName",)} />

      <label >Last Name</label>
      <input {...register("lastName")} />

      <label >Gender Selection</label>
      <select {...register("gender")}>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select >

      <input type="submit" />
    </form>
  );
};
