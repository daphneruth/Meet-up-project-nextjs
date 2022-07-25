import MeetupList from '../../components/meetups/MeetupList';
function HomePage (){
 return (
    <MeetupList meetups={DUMMY_MEETUPS} />
 )
}
export default HomePage;