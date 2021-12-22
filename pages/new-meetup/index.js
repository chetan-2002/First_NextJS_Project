// //domain.com/new-meetup
// import NewMeetupForm from "../../components/meetups/NewMeetupForm";
// import { useRouter } from "next/router";
// const NewMeetup = () => {
//   const router = useRouter();
//   const addMeetupHandler = async (enteredMeetupData) => {
//     const response = await fetch('HTTP://localhost:3000/api/new-meetup', {
//       method: "POST",
//       body: JSON.stringify(enteredMeetupData),
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//     router.push("/");
//   };
//   return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
// };
// export default NewMeetup;

// our-domain.com/new-meetup
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default NewMeetupPage;