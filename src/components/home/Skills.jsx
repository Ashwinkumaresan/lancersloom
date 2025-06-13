import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headingsRef = useRef([]);

  // split animations 
  useEffect(() => {
    // Animate each h2 block itself (border and opacity)
    gsap.from(headingsRef.current, {
      opacity: 1,
      y: 50,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: headingsRef.current[0].parentNode,
        start: "top 80%",
        toggleActions: "play reverse play reverse", // toggle animation both direction
      },
      onComplete: () => {
        headingsRef.current.forEach((el) => el.style.transform = "");
      }
    });

    // Now split and animate words inside each h2
    headingsRef.current.forEach((heading) => {
      const words = heading.innerText.split(" ");
      heading.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      const wordSpans = heading.querySelectorAll(".word");

      gsap.from(wordSpans, {
        y: 60,
        opacity: 0,
        rotation: gsap.utils.random(-70, 70),
        stagger: 0.08,
        duration: 0.9,
        ease: "back.out(9)",
        delay: 0.3,
        scrollTrigger: {
          trigger: heading,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);


  const skills = [
    "UI/UX",
    "Figma",
    "Logo Posters",
    "Html5 Css3",
    "JS",
    "Bootstrap Css",
    "ReactJS",
    "Python",
    "Flask",
    "MongoDB",
    "SQL",
    "Django",
    "Django REST API",
    "API Development",
  ];

  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    // Split text into spans per word
    const words = title.innerText.split(" ");
    title.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    // Create GSAP timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 70%",
        toggleActions: "play reverse play reverse ",
      },
    });

    // Animate container fade & slide up
    tl.from(title, {
      opacity: 1,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate each word with bounce & scale staggered
    tl.from(
      title.querySelectorAll(".word"),
      {
        scale: 0.8,
        opacity: 0,
        y: 20,
        ease: "back.out(2)",
        stagger: 0.12,
        duration: 0.6,
      },
      "-=0.4" // overlap with previous animation
    );
  }, []);

  const titleRef2 = useRef(null);

  useEffect(() => {
    const title = titleRef2.current;
    if (!title) return;

    // Split text into spans per word
    const words = title.innerText.split(" ");
    title.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    // Create GSAP timeline with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 70%",
        toggleActions: "play reverse play reverse ",
      },
    });

    // Animate container fade & slide up
    tl.from(title, {
      opacity: 1,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate each word with bounce & scale staggered
    tl.from(
      title.querySelectorAll(".word"),
      {
        scale: 0.8,
        opacity: 0,
        y: 20,
        ease: "back.out(2)",
        stagger: 0.12,
        duration: 0.6,
      },
      "-=0.4" // overlap with previous animation
    );
  }, []);

  //card
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Optional: Animate tick icons scaling in with bounce stagger
    cardsRef.current.forEach((card) => {
      const tickIcon = card.querySelector("img");
      gsap.fromTo(
        tickIcon,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.6,
          ease: "bounce.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  const cardContents = [
    {
      title: "Unlimited Components:",
      text: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Build Website:",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "Easy Analytics:",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "Release Fast:",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ];


  return (
    <section id="skills" className="p-10 mb-5">
      <Container
      >
        <h2 ref={titleRef} className="display-1 fw-bold text-center">The area's where we are</h2>
        <div className="text-center py-5 d-flex align-items-center justify-content-center gap-4 flex-wrap position-relative">
          {skills.map((skill, index) => (
            <h2
              key={index}
              ref={(el) => (headingsRef.current[index] = el)}
              className="split-text fw-light border rounded fs-5 py-2 px-4 badge_hover"
            >
              {skill}
            </h2>
          ))}
        </div>

      </Container>
      <Container>
        <h2 className="display-1 fw-bold mt-5 text-center" ref={titleRef2} >Unlimited options give you the ultimate flexibility</h2>

        {/* <Row className="g-4 my-3">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4"  >
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt=""  />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" >Unlimited Components:</span> Clarity gives you the blocks & components you need to create a website.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4" >
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt=""  />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" >Build Website:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4" >
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt=""  />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" >Easy Analytics:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}  >
            <Card className="shadow-sm p-4" >
              <Card.Body className="d-flex gap-2">
                <Card.Title className="d-flex align-items-center gap-2">
                  <img src="/Icon_tick.png" alt=""  />
                </Card.Title>
                <Card.Text className="text-muted fs-14">
                  <span className="text-dark fw-bold" >Release Fast:</span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

        <Row className="g-4 my-3">
          {cardContents.map(({ title, text }, i) => (
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} key={i}>
              <Card className="shadow-sm p-4" ref={(el) => (cardsRef.current[i] = el)}>
                <Card.Body className="d-flex gap-2">
                  <Card.Title className="d-flex align-items-center gap-2">
                    <img src="/Icon_tick.png" alt="tick" />
                  </Card.Title>
                  <Card.Text className="text-muted fs-14">
                    <span className="text-dark fw-bold">{title}</span> {text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  )
}

export default Skills

