import * as Yup from 'yup';

const ValidationSchema = Yup.object({
    name: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
    role: Yup.string().oneOf(['mentee', 'mentor'], 'Invalid Role').required('Required'),
})

export default ValidationSchema;