import React, { useState, useEffect } from "react";
import "../styles/home.css";
import StaffList from "../../../components/staff-list/scripts/staff-list";
import Jumbotron from "../../../components/jumbotron/scripts/jumbotron.jsx";
export default function HomePage() {
  const [imageList, setImageList] = useState([]);
  const [currentImageId, setCurrentImageId] = useState(null);
  useEffect(() => {
    changeImageList(
      shuffle([
<<<<<<< HEAD
        "jumbotron-bg-anim1",
        "jumbotron-bg-anim3",
        "jumbotron-bg-anim4",
        "jumbotron-bg-anim5",
        "jumbotron-bg-anim6",
        "jumbotron-bg-anim7",
        "jumbotron-bg-anim8",
        "jumbotron-bg-anim9",
        "jumbotron-bg-anim10",
        "jumbotron-bg-anim11",
        "jumbotron-bg-anim12"
      ])
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(changeImageId, 4500);
    return () => clearInterval(interval);
  });

=======
        "jumbotron-bg-home",
        "jumbotron-bg-donate",
        "jumbotron-bg-racing"
      ])
    );
    setInterval(changeImageId, 5000);
  }, []);

>>>>>>> started pocing carousel
  const changeImageList = list => {
    setImageList(list);
  };

  const changeImageId = () => {
<<<<<<< HEAD
    if (imageList.length - 1 === currentImageId) setCurrentImageId(0);
=======
    if (!currentImageId) setCurrentImageId(0);
>>>>>>> started pocing carousel
    else setCurrentImageId(currentImageId + 1);
  };

  const shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  return (
    <div>
      <Jumbotron
<<<<<<< HEAD
        className={`${imageList[currentImageId] ||
          "jumbotron-bg-anim1"} jumbotron-animate`}
        title="Trollskogen - Svensk minecraft server 1.15"
=======
        className={imageList[currentImageId]}
        title="Trollskogen - Svensk minecraft server 1.14"
>>>>>>> started pocing carousel
        text="Kul att du kikar in! Trollskogen är ett nytt svenskt
    minecraft-community som startades i februari 2019. Vi värnar om att
    ha ett moget community och därför kommer vi att vara stränga med
    reglerna."
        linkArea={
          <React.Fragment>
            <span>Ip: mc.trollskogen.nu</span>
          </React.Fragment>
        }
      />

      <div className="post-area">
        <br />
        <div className="post post-left">
          <hr />
          <h2 className="post-title">Om oss</h2>
          <p className="post-text">
            Trollskogen är en vänskaplig towny-server utan whitelist. Vi kör med
            ett gäng plugin för att skapa en bättre speluplevelse, bl.a.{" "}
            <b>Lwc</b>, <b>towny</b> och <b>chestshops</b>. På trollskogen har
            vi nolltollerans mot griefing, fusk och trakasserier och vi är hårda
            med att alla ska följa de regler vi har satt upp.
            <br />
            <br />
            På trollskogen kör vi på en svårare svårighetsgrad(hard), man får
            inte mycket gratisitems och vi har stängt av hp-regenerering i
            nether, allt för att göra minecraft lite mer utmanande!
            <br /> <br />
            Självklart trivs du som gillar lugn och ro och bara vill bygga i
            fred också! Då kan du gå med i en av våra towny städer, eller skapa
            en själv, i dessa kan man stänga av monster.
          </p>
        </div>
        <div className="post post-right post-staff-area">
          <hr />
          <h2>Vi i staff</h2>
          <StaffList />
        </div>
      </div>
    </div>
  );
}
