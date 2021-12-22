import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://source.unsplash.com/random"
      title="React Meetup"
      address="123 Main St, New York, NY 10001"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
    />
  );
};
export function getStaticPaths() {
  return {
    paths: [{ params: {meetupId: "1" } }, { params: { meetupId: "2" } }],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetup: {
        id: meetupId,
        title: "React Meetup",
        image: "https://source.unsplash.com/random",
        address: "123 Main St, New York, NY 10001",
        description: "Lorem ipsum dolor sit amet, consectetur ad.",
      },
    },
  };
}
export default MeetupDetails;
