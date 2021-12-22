import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 1,
        title: 'React Meetup',
        image: 'https://source.unsplash.com/random',
        address: '123 Main St, New York, NY 10001'
    },
    {
        id: 2,
        title: 'React Native Meetup',
        image: 'https://source.unsplash.com/random',
        address: '123 Main St, New York, NY 10001'
    },
    {
        id: 3,
        title: 'Vue Meetup',
        image: 'https://source.unsplash.com/random',
        address: '123 Main St, New York, NY 10001'
    },
];
const  HomePage = (props) => {
    return <MeetupList meetups ={props.meetups}/>;
}
export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        // revvalidate : 5
    }
}
export default HomePage;