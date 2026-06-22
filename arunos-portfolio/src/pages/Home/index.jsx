import Hero from "../../components/hero/Hero";
import PageIntro from "../../components/common/PageIntro/PageIntro";
import useAutoPageScroll from "../../hooks/useAutoPageScroll";
import desktop from "../../assets/images/desktop.png";

const Home = () => {
  useAutoPageScroll("/about");

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <Hero />
      <PageIntro title="Welcome to My World" />
    </div>

  );
};

export default Home;