import { useEffect, useState } from 'react';
import FadeInEffect from '../Animations/FadeInEffect';
import data from '../Data/data.json';
import { Waypoint } from 'react-waypoint';
import ContactItem from './ContactItem';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sendEmail from '../utils/SubmitFormUtil';

type MyFormValues = {
  name: string;
  email: string;
  message: string;
}

import CardHoverEffect from '../Animations/CardHoverEffect';
import GradientText from '../Animations/GradientText';

interface ContactProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

export default function Contact({ scrollRef }: ContactProps) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [contactVisibility, setContactVisibility] = useState(Array(data.contacts.length + 6).fill(false));

  const [isSubmitHover, setIsSubmitHover] = useState(false);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (isOnScreen) {
      setTimeout(() => {
        for (let i = 0; i < contactVisibility.length; i++) {
          setTimeout(() => {
            setContactVisibility(prevState => {
              const newState = [...prevState];
              newState[i] = true;
              return newState;
            });
          }, i * 300);
        }
      }, 500);
    }
  }, [isOnScreen]);

  const contacts = data.contacts.map((contact, i) => (
    <div key={i} className='w-fit'>
      {/* contactVisibility[0] is for the text line */}
      <FadeInEffect isVisible={contactVisibility[i + 1]}>
        <ContactItem
          text={contact.name}
          icon={contact.icon_name}
          url={contact.url}
        />
      </FadeInEffect>
    </div>
  ));

  const InputSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().min(2, 'Too Short!').max(1000, 'Too Long!').required('Required'),
  });

  const onSubmit = (values: any, actions: any) => {
    const form: MyFormValues = {
      name: values.name,
      email: values.email,
      message: values.message,
    };
    sendEmail(form);
    actions.setSubmitting(false);
    actions.resetForm();
    setIsFormSubmitted(true);
  }

  return (
    <div ref={scrollRef} className='pt-48'>
      <h1 className='ml-8 sm:ml-20 text-4xl text-bold'>Contact</h1>
      <Waypoint onEnter={() => {
        setIsOnScreen(true);
      }}>
        <div className='ml-8 sm:ml-20'>
          <div className='grid grid-cols-1 grid-row-2 lg:grid-cols-2 lg:grid-rows-1 gap-8 mt-8'>
            <div>
              <FadeInEffect isVisible={contactVisibility[0]}>
                <p className='mt-10 text-6xl'>Let's connect!</p>
              </FadeInEffect>
              <div className='mt-10 inline-grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 gap-y-4 sm:gap-y-8'>
                {contacts}
              </div>
            </div>
            <div className='mt-10 w-2/3'>
              <Formik
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={onSubmit}
                validationSchema={InputSchema}
              >
                <Form>
                  <FadeInEffect isVisible={contactVisibility[data.contacts.length + 1]}>
                    <p className='text-4xl'>Or send me a message</p>
                  </FadeInEffect>
                  <FadeInEffect isVisible={contactVisibility[data.contacts.length + 2]}>
                    <div className='flex flex-col'>
                      <label className='text-xl mt-4'>Name</label>
                      <Field type='name' name='name' className='mt-2 border-2 border-gray-200 focus:outline-none focus:border-gray-400 rounded-md p-2' />
                      <ErrorMessage name='name' component={GradientText} className='text-md font-bold' />
                    </div>
                  </FadeInEffect>
                  <FadeInEffect isVisible={contactVisibility[data.contacts.length + 3]}>
                    <div className='flex flex-col'>
                      <label className='text-xl mt-4'>Email</label>
                      <Field type='email' name='email' className='mt-2 border-2 border-gray-200 focus:outline-none focus:border-gray-400 rounded-md p-2' />
                      <ErrorMessage name='email' component={GradientText} className='text-md font-bold' />
                    </div>
                  </FadeInEffect>
                  <FadeInEffect isVisible={contactVisibility[data.contacts.length + 4]}>
                    <div className='flex flex-col'>
                      <label className='text-xl mt-4'>Message</label>
                      <Field type='message' name='message' className='mt-2 border-2 border-gray-200 focus:outline-none focus:border-gray-400 rounded-md p-2 resize-y h-32' />
                      <ErrorMessage name='message' component={GradientText} className='text-md font-bold' />
                    </div>
                  </FadeInEffect>
                  <FadeInEffect isVisible={contactVisibility[data.contacts.length + 5]}>
                    <div className='flex flex-row justify-center mt-4'>
                      <CardHoverEffect isHover={isSubmitHover} scale={1.1}>
                        {
                          isFormSubmitted ?
                            <div
                              className='mt-4 bg-gradient-to-r from-[#473b7b] via-[#3584a7] to-[#30d2be] rounded-md p-2 w-60 text-white text-lg'
                              onMouseEnter={() => setIsSubmitHover(true)}
                              onMouseLeave={() => setIsSubmitHover(false)}
                            >
                              <div className='flex flex-row justify-center'>
                                <span>Message sent</span>
                                <svg className='ml-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M22 4L12 14.01l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </div> : <button
                              type="submit"
                              className='mt-4 bg-gradient-to-r from-[#ff4e50] to-[#f9d423] rounded-md p-2 w-60 text-white text-lg'
                              onMouseEnter={() => setIsSubmitHover(true)}
                              onMouseLeave={() => setIsSubmitHover(false)}
                            >Submit</button>
                        }
                      </CardHoverEffect>
                    </div>
                  </FadeInEffect>
                </Form>
              </Formik>
            </div>
          </div>
          <div className='mb-12'>
            <p className='mt-20'>
              &copy; {new Date().getFullYear()}&nbsp;Made with ❤ by <a className='underline underline-offset-4' href='https://github.com/waynew99' target='_blank'>Wayne Wang</a>
            </p>
            <p className='mt-2'>
              Inspired by <a className='underline underline-offset-4' href='https://github.com/chetanverma16/react-portfolio-template' target='_blank'>Chetan</a>
            </p>
          </div>
        </div>
      </Waypoint >
    </div >
  );
}