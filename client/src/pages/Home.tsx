import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Photos from "../components/photo/Photos";
import Posts from "../components/post/Posts";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
    return (
        <>
            <Header />
            <Photos />
            <Posts />

            <Sidebar />
            <Nav />
        </>
    );
}

export default Home;