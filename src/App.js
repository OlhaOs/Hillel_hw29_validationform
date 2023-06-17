import { useForm } from 'react-hook-form';
import './styles.css';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      dob: '',
      gender: '',
      terms: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <div className='container'>
      <h2>Registration Form</h2>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            {...register('name', {
              required: 'This is required',
              maxLength: { value: 20, message: 'Max length 20' },
              minLength: { value: 4, message: 'Min length 4' },
            })}
            type='text'
            className='form-control'
            name='name'
            placeholder='Enter your name'
            required
          />
          <div className='text-danger small'>{errors.name?.message}</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            {...register('email', {
              required: 'This is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Incorrect e-mail',
              },
            })}
            type='email'
            className='form-control'
            name='email'
            placeholder='Enter your email'
            required
          />
          <div className='text-danger small'>{errors.email?.message}</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            {...register('password', {
              required: 'This is required',
              maxLength: { value: 20, message: 'Max length 20' },
              minLength: { value: 6, message: 'Min length 6' },
            })}
            type='password'
            className='form-control'
            name='password'
            placeholder='Enter your password'
            required
          />
          <div className='text-danger small'>{errors.password?.message}</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='confirmPassword' className='form-label'>
            Confirm Password
          </label>
          <input
            {...register('confirmPassword', {
              required: 'This is required',
              maxLength: { value: 20, message: 'Max length 20' },
              minLength: { value: 6, message: 'Min length 6' },
              validate: {
                matchesPassword: value =>
                  value === watch('password') || 'Passwords do not match',
              },
            })}
            type='password'
            className='form-control'
            name='confirmPassword'
            placeholder='Confirm your password'
            required
          />
          <div className='text-danger small'>
            {errors.confirmPassword?.message}
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='dob' className='form-label'>
            Date of Birth
          </label>
          <input
            {...register('dob', { required: 'This is required' })}
            type='date'
            className='form-control'
            name='dob'
            required
          />
          <div className='text-danger small'>{errors.dob?.message}</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='gender' className='form-label'>
            Gender
          </label>

          <select
            {...register('gender', { required: 'This is required' })}
            className='form-select'
            name='gender'
            required
          >
            <option value=''>Select your gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
          <div className='text-danger small'>{errors.gender?.message}</div>
        </div>
        <div className='mb-3 form-check'>
          <input
            {...register('terms', {
              required: 'You have to agree with conditions',
            })}
            type='checkbox'
            className='form-check-input'
            name='terms'
            required
          />
          <label className='form-check-label' htmlFor='terms'>
            I agree to the terms and conditions
          </label>
          <div className='text-danger small'>{errors.terms?.message}</div>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
