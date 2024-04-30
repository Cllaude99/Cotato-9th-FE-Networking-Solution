import * as yup from 'yup';

export const formSchema = yup
  .object({
    movieName: yup.string().required('영화제목을 입력해주세요 😂'),
  })
  .required();
