import React, { useEffect, useState } from "react";
import img from "../../assets/google.png";
import img1 from "../../assets/bgshado2.png";
import img2 from "../../assets/bg.png";
import { Link } from 'react-router-dom';
const Thirdpage = () => {
  const testimonials = [
    {
      id: 1,
      text: "I’ve been using this web hosting service for over a year and I’m really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
      name: "Jane Smith",
      role: "Freelance Designer",
      rating: 5,
      url: "https://s3-alpha-sig.figma.com/img/9486/548b/ef04ed43d452dd872c2d9ed2320ca618?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQ9PpiUl9EPhfUeeezeWWsVD8Cf8Wq2DrNZA0B6D9RfswmI8sE77aRFeIrGR5O9ZjzGMT8ModOG9iRLkoayGWou3qdiWg0RRMFaRRfch7rdxk5lZ8RAte8gmKmnIKh1Tz3B3dHNjd1RY1izrTyNoE5EE-veX-RbdzrTjxGkBYIR6OPbevZ0HwpynrfkFISKF8G-c6zSh3W7qxYj1-Ys38jPgFOX5T9mbCcSC-YWHp5tX9GtBu5kve4bbDzuu9D-TBg2Agixinz4xfUPFRgBqndRB2doE-GudBAT6c2C5T9EG6sp979U-iK4D4atU1nh1i4SZQ67HfzE3H18ZvCqClQ__",
    },
    {
      id: 2,
      text: "I’ve been using this web hosting service for a few months now and overall it’s been fine. The uptime has been good and I haven’t had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
      name: "Tom Williams",
      role: "Software Developer",
      rating: 4,
      url: "https://s3-alpha-sig.figma.com/img/9486/548b/ef04ed43d452dd872c2d9ed2320ca618?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQ9PpiUl9EPhfUeeezeWWsVD8Cf8Wq2DrNZA0B6D9RfswmI8sE77aRFeIrGR5O9ZjzGMT8ModOG9iRLkoayGWou3qdiWg0RRMFaRRfch7rdxk5lZ8RAte8gmKmnIKh1Tz3B3dHNjd1RY1izrTyNoE5EE-veX-RbdzrTjxGkBYIR6OPbevZ0HwpynrfkFISKF8G-c6zSh3W7qxYj1-Ys38jPgFOX5T9mbCcSC-YWHp5tX9GtBu5kve4bbDzuu9D-TBg2Agixinz4xfUPFRgBqndRB2doE-GudBAT6c2C5T9EG6sp979U-iK4D4atU1nh1i4SZQ67HfzE3H18ZvCqClQ__",
    },
    {
      id: 3,
      text: "I’ve been using this web hosting service for a few months and it’s been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
      name: "Michael Brown",
      role: "Online Entrepreneur",
      rating: 2,
      url: "https://s3-alpha-sig.figma.com/img/9486/548b/ef04ed43d452dd872c2d9ed2320ca618?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQ9PpiUl9EPhfUeeezeWWsVD8Cf8Wq2DrNZA0B6D9RfswmI8sE77aRFeIrGR5O9ZjzGMT8ModOG9iRLkoayGWou3qdiWg0RRMFaRRfch7rdxk5lZ8RAte8gmKmnIKh1Tz3B3dHNjd1RY1izrTyNoE5EE-veX-RbdzrTjxGkBYIR6OPbevZ0HwpynrfkFISKF8G-c6zSh3W7qxYj1-Ys38jPgFOX5T9mbCcSC-YWHp5tX9GtBu5kve4bbDzuu9D-TBg2Agixinz4xfUPFRgBqndRB2doE-GudBAT6c2C5T9EG6sp979U-iK4D4atU1nh1i4SZQ67HfzE3H18ZvCqClQ__",
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % imgDAta.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? imgDAta.length - 1 : prev - 1));
  };

  const getTransformStyle = (position) => {
    switch (position) {
      case 0: // Leftmost
        return { scale: 0.7, zIndex: 1 };
      case 1: // Second from left
        return { scale: 0.85, zIndex: 3 };
      case 2: // Center (biggest)
        return { scale: 1.2, zIndex: 5 };
      case 3: // Second from right
        return { scale: 0.85, zIndex: 3 };
      case 4: // Rightmost
        return { scale: 0.7, zIndex: 1 };
      default:
        return { scale: 0.5, zIndex: 0 };
    }
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      visible.push((current + i + imgDAta.length) % imgDAta.length);
    }
    return visible;
  };

  const imgDAta = [
    {
      url: "https://s3-alpha-sig.figma.com/img/bbbc/e0eb/d3f001e10ceb3569e69db8ac466d237a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g4Gya-lJjtrwiT5hZF5tuYj4iSpoplZsFGMOE7ZjprJwd7vtNlqoOHnApvEs-0tthehRZrpQghThBdIB9c~bkZbAECubxAmoLL6XMCLqlvqG-WGaRcKrrzTWEAjs0YzlS8f1W3sf0tDT-BQd-1gEg77C--hAmujXwAvK8X8bMN8~q~4F~LWOq5ZIVWshCp3HB-MB2befDRyLjCp9XcxoiXUsD3ItMt9BEyXwbTvUpV-DjvBl5XbkkPH7XafLd4Qpn5mifAYFdxL1kzKW233XHQsnJ4eeAxz91O-R1jRdx-Cw7gZzcGatXF3Dq4NmiAwPhUmMqHYB0omkCIQr1RUfnw__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e630/97f7/19bb7114cd240b7f6fee9604221e3772?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7FI66jMwYbsy4Bvc9jouk1XvjC2Q3PcdlagOAXB1~TISh-kxpbqfiK2E~6IkBs0Eny1d7kWRC31K-GPvxVwOBHfck2Fjzfumk~ffhL60tnoN2gOuhPPbkwj~ZcUV0XN8YQ4d2f2efW1W~KDLTOBaEJBRi2P3KLu4g~mldJ0eSyeL-2sQQuLSoJ96xtcN0R0-KWa9GdifxDWu0JOjJRUw5EgZaYidy6ju9MxplJkpj4OtsrCjHwtX5bKLfmwP5SBZ8I9En1yi~UP4fRIxKBO4-qS4FqoGH0emfF9R5HYgSL-yUcoWJdx5GrvnkHFsS0Ed20mRKiarLpyXKo1yYOXoA__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e630/97f7/19bb7114cd240b7f6fee9604221e3772?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7FI66jMwYbsy4Bvc9jouk1XvjC2Q3PcdlagOAXB1~TISh-kxpbqfiK2E~6IkBs0Eny1d7kWRC31K-GPvxVwOBHfck2Fjzfumk~ffhL60tnoN2gOuhPPbkwj~ZcUV0XN8YQ4d2f2efW1W~KDLTOBaEJBRi2P3KLu4g~mldJ0eSyeL-2sQQuLSoJ96xtcN0R0-KWa9GdifxDWu0JOjJRUw5EgZaYidy6ju9MxplJkpj4OtsrCjHwtX5bKLfmwP5SBZ8I9En1yi~UP4fRIxKBO4-qS4FqoGH0emfF9R5HYgSL-yUcoWJdx5GrvnkHFsS0Ed20mRKiarLpyXKo1yYOXoA__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e630/97f7/19bb7114cd240b7f6fee9604221e3772?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7FI66jMwYbsy4Bvc9jouk1XvjC2Q3PcdlagOAXB1~TISh-kxpbqfiK2E~6IkBs0Eny1d7kWRC31K-GPvxVwOBHfck2Fjzfumk~ffhL60tnoN2gOuhPPbkwj~ZcUV0XN8YQ4d2f2efW1W~KDLTOBaEJBRi2P3KLu4g~mldJ0eSyeL-2sQQuLSoJ96xtcN0R0-KWa9GdifxDWu0JOjJRUw5EgZaYidy6ju9MxplJkpj4OtsrCjHwtX5bKLfmwP5SBZ8I9En1yi~UP4fRIxKBO4-qS4FqoGH0emfF9R5HYgSL-yUcoWJdx5GrvnkHFsS0Ed20mRKiarLpyXKo1yYOXoA__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e630/97f7/19bb7114cd240b7f6fee9604221e3772?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7FI66jMwYbsy4Bvc9jouk1XvjC2Q3PcdlagOAXB1~TISh-kxpbqfiK2E~6IkBs0Eny1d7kWRC31K-GPvxVwOBHfck2Fjzfumk~ffhL60tnoN2gOuhPPbkwj~ZcUV0XN8YQ4d2f2efW1W~KDLTOBaEJBRi2P3KLu4g~mldJ0eSyeL-2sQQuLSoJ96xtcN0R0-KWa9GdifxDWu0JOjJRUw5EgZaYidy6ju9MxplJkpj4OtsrCjHwtX5bKLfmwP5SBZ8I9En1yi~UP4fRIxKBO4-qS4FqoGH0emfF9R5HYgSL-yUcoWJdx5GrvnkHFsS0Ed20mRKiarLpyXKo1yYOXoA__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e630/97f7/19bb7114cd240b7f6fee9604221e3772?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7FI66jMwYbsy4Bvc9jouk1XvjC2Q3PcdlagOAXB1~TISh-kxpbqfiK2E~6IkBs0Eny1d7kWRC31K-GPvxVwOBHfck2Fjzfumk~ffhL60tnoN2gOuhPPbkwj~ZcUV0XN8YQ4d2f2efW1W~KDLTOBaEJBRi2P3KLu4g~mldJ0eSyeL-2sQQuLSoJ96xtcN0R0-KWa9GdifxDWu0JOjJRUw5EgZaYidy6ju9MxplJkpj4OtsrCjHwtX5bKLfmwP5SBZ8I9En1yi~UP4fRIxKBO4-qS4FqoGH0emfF9R5HYgSL-yUcoWJdx5GrvnkHFsS0Ed20mRKiarLpyXKo1yYOXoA__",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/e630/97f7/19bb7114cd240b7f6fee9604221e3772?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7FI66jMwYbsy4Bvc9jouk1XvjC2Q3PcdlagOAXB1~TISh-kxpbqfiK2E~6IkBs0Eny1d7kWRC31K-GPvxVwOBHfck2Fjzfumk~ffhL60tnoN2gOuhPPbkwj~ZcUV0XN8YQ4d2f2efW1W~KDLTOBaEJBRi2P3KLu4g~mldJ0eSyeL-2sQQuLSoJ96xtcN0R0-KWa9GdifxDWu0JOjJRUw5EgZaYidy6ju9MxplJkpj4OtsrCjHwtX5bKLfmwP5SBZ8I9En1yi~UP4fRIxKBO4-qS4FqoGH0emfF9R5HYgSL-yUcoWJdx5GrvnkHFsS0Ed20mRKiarLpyXKo1yYOXoA__",
    },
    
  ];

  const imgDAta1 = [
    {
      text: "Music",
      url: "https://s3-alpha-sig.figma.com/img/a28c/0ce4/2d37bef1b9760cc688b91c046818725b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaTiRMKWLBvaDbMslNJ5~DDGIDqD5u1ezUAynkPs~-Dqff~RVCzuoe3osgQJ3ISU-cwXQ0su2fBWhMkNgz33JV0-4rxdM0T7D8HZ8XjIcCN~d0x3WHkrUN7iEUpgpz7zNiftC5xCUx2U7y75Obi1nxR0Kceiv-YH4Rjo-35Ru1PIk0evSy1ittpPt6bPgzcmEed06kIYb~ZqT27E2ddV9jhr4lP0WlfAZ2aQLjM6dry3T~bHA~UkczHfGyNAEyWUrhJKkKsQ9iIMs-iYmHBCozhEBPi1Nh6B9FpOHlxrfF24-p~IIcmsKTEIsEPiH-XuuwHDXYKJ3qdju~E1sTl~7Q__",
    },
    {
      text: "Art",
      url: "https://s3-alpha-sig.figma.com/img/cdcf/4b80/6ae30377c88a9c32f95270fba0ed43f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L92jfcXuGizQJIOetYF5ON8hvdW7tmCz-rjmO5KNmyeRu4BVRljjbnywXC-JITUsPMQb7WvPXg0JcywOS8-7Xk-Y1QpEjk2-5dyYwged683VnqPsX0lKl5-yI08QkiszZKrDOjleSjGOcqGGZbV5cy~saPjBySybOS9q-id8Sba7EkITDRM7FkGHESh73UNT5GW5iinLM6XjhZQmMwwDQXE0vl2-9jYRi~1GZwARV9l-1hXvJ~pgqzOmYenM1QTfFByPzBBG4dFYqNeXO1ov4D1NMQCpgqczI3WubSq3oEyD5B7ie4EXKL9K9ATC4kUkKVU1GhuEan9OP58kQTaQqA__",
    },
    {
      text: "Comedy",
      url: "https://s3-alpha-sig.figma.com/img/9486/548b/ef04ed43d452dd872c2d9ed2320ca618?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQ9PpiUl9EPhfUeeezeWWsVD8Cf8Wq2DrNZA0B6D9RfswmI8sE77aRFeIrGR5O9ZjzGMT8ModOG9iRLkoayGWou3qdiWg0RRMFaRRfch7rdxk5lZ8RAte8gmKmnIKh1Tz3B3dHNjd1RY1izrTyNoE5EE-veX-RbdzrTjxGkBYIR6OPbevZ0HwpynrfkFISKF8G-c6zSh3W7qxYj1-Ys38jPgFOX5T9mbCcSC-YWHp5tX9GtBu5kve4bbDzuu9D-TBg2Agixinz4xfUPFRgBqndRB2doE-GudBAT6c2C5T9EG6sp979U-iK4D4atU1nh1i4SZQ67HfzE3H18ZvCqClQ__",
    },
    {
      text: "Workshop",
      url: "https://s3-alpha-sig.figma.com/img/93d3/2452/01c148edb5cad88ece5fcaf5ca712f48?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SLoxQXd27p5X4QDSH~~6JI52r1GkTZETCqpxLUd8quIkSJ-jMleXerLuFSe95XC06jZSaD5FzxOqTgh4qRyXGFFPjcIZuyloCrZ8w413g0hGLgRG8DsjjS7tYa2lbwHFVzZiz2kXQkAWKn6qNf33rj2e2VWWZHzpo7rUl5ZPLhuXPrFmclO7dZlulaTFLEgW0hjsl9SbLbJUxM1TuErvKKF~PJ5G1ETx8MZtD0YhfNSA8giylCLy1t3j~ZGzZahPJkyk-mWKz54FcsGED0udZmphFmeDjF7Z0siM3Amzu3HISdpABuxl1MpcLw3nZFdBNmnQGQIR93VezN5e2FfVZw__",
    },
    {
      text: "Dance",
      url: "https://s3-alpha-sig.figma.com/img/8c30/ec02/20c6065128f6cd5fa3730f328594ccf6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4sGs87cleMFpKgcJpSTnYbUdWBDl~t-eL2~TIvFELh0tLbOXKP-pMW2jKWehHZSXufXm4Tr-UZYC3RkUibGIIyodjewnhOVxVwiTRKiUQHa1PO5~~KOg~uDNZODchSzIKe-UfN2vRSGTaXCk0ANeUijcbgnlYDo8I-NuuGcRVsuFg4k6Q3zK1-7upOZqMF78AkAWoByagIuSX29VxdKjB~JrOba28B3LE5YnVeBm2xuYE-R1xU09OdsB72m2Z-VHp30gGRkBgg8mFLh5QsFERhF4kg3j0xu4Y5cfqMBdePy166byimaSLkC6QTziqKnqrwKMMamRpXEMl-SLpvb2A__",
    },
    {
      text: "Music",
      url: "https://s3-alpha-sig.figma.com/img/a28c/0ce4/2d37bef1b9760cc688b91c046818725b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaTiRMKWLBvaDbMslNJ5~DDGIDqD5u1ezUAynkPs~-Dqff~RVCzuoe3osgQJ3ISU-cwXQ0su2fBWhMkNgz33JV0-4rxdM0T7D8HZ8XjIcCN~d0x3WHkrUN7iEUpgpz7zNiftC5xCUx2U7y75Obi1nxR0Kceiv-YH4Rjo-35Ru1PIk0evSy1ittpPt6bPgzcmEed06kIYb~ZqT27E2ddV9jhr4lP0WlfAZ2aQLjM6dry3T~bHA~UkczHfGyNAEyWUrhJKkKsQ9iIMs-iYmHBCozhEBPi1Nh6B9FpOHlxrfF24-p~IIcmsKTEIsEPiH-XuuwHDXYKJ3qdju~E1sTl~7Q__",
    },
    {
      text: "Art",
      url: "https://s3-alpha-sig.figma.com/img/cdcf/4b80/6ae30377c88a9c32f95270fba0ed43f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L92jfcXuGizQJIOetYF5ON8hvdW7tmCz-rjmO5KNmyeRu4BVRljjbnywXC-JITUsPMQb7WvPXg0JcywOS8-7Xk-Y1QpEjk2-5dyYwged683VnqPsX0lKl5-yI08QkiszZKrDOjleSjGOcqGGZbV5cy~saPjBySybOS9q-id8Sba7EkITDRM7FkGHESh73UNT5GW5iinLM6XjhZQmMwwDQXE0vl2-9jYRi~1GZwARV9l-1hXvJ~pgqzOmYenM1QTfFByPzBBG4dFYqNeXO1ov4D1NMQCpgqczI3WubSq3oEyD5B7ie4EXKL9K9ATC4kUkKVU1GhuEan9OP58kQTaQqA__",
    },
    {
      text: "Comedy",
      url: "https://s3-alpha-sig.figma.com/img/9486/548b/ef04ed43d452dd872c2d9ed2320ca618?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQ9PpiUl9EPhfUeeezeWWsVD8Cf8Wq2DrNZA0B6D9RfswmI8sE77aRFeIrGR5O9ZjzGMT8ModOG9iRLkoayGWou3qdiWg0RRMFaRRfch7rdxk5lZ8RAte8gmKmnIKh1Tz3B3dHNjd1RY1izrTyNoE5EE-veX-RbdzrTjxGkBYIR6OPbevZ0HwpynrfkFISKF8G-c6zSh3W7qxYj1-Ys38jPgFOX5T9mbCcSC-YWHp5tX9GtBu5kve4bbDzuu9D-TBg2Agixinz4xfUPFRgBqndRB2doE-GudBAT6c2C5T9EG6sp979U-iK4D4atU1nh1i4SZQ67HfzE3H18ZvCqClQ__",
    },
  ];

  const [slider, setSlider] = useState(0);
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    console.log(slider);

    const sliderInterval = setInterval(() => {
      if (slider === imgDAta.length - 1) {
        setTransitioning(false);
      }
      setSlider((prevSlider) =>
        prevSlider === imgDAta.length - 4 ? 0 : prevSlider + 1
      );
    }, 2000);

    return () => clearInterval(sliderInterval);
  }, [slider]);

 
  useEffect(() => {
    if (slider === 0) {
      setTransitioning(true);
    }
  }, [slider]);

  return (
    <div
      className="bg-black text-white font-sans bg-cover"
      style={{ backgroundImage: `url(${img1})` }}
    >
        <section className="text-center py-1">
          <h1 className="text-4xl font-bold">Explore Eventiane App!</h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Lorem ipsum is placeholder text for the app description. Available
            on Google Play and App Store.
          </p>

          <div className="w-full flex justify-center items-center py-8 relative">
            <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[80%] pt-32 h-[600px] overflow-hidden flex justify-center items-center">
              {getVisibleImages().map((index, position) => {
                const { scale, opacity, zIndex } = getTransformStyle(position);

                return (
                  <div
                    key={index}
                    className="absolute h-full transition-transform duration-1000 ease-in-out"
                    style={{
                      transform: `translateX(${
                        (position - 2) * 120
                      }%) scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                  >
                    <img
                      src={imgDAta[index].url}
                      alt={`Slide ${index + 1}`}
                      className="w-60 h-fit object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      


        <section className="py-12 relative mx-auto">
  {/* Heading */}
  <div className=" mx-auto">
    <div className="mx-auto">
    <h2 className="text-3xl text-white z-40 w-11/12 sm:ml-32  font-bold text-start mb-8">
      Explore Categories
    </h2>
    </div>

    {/* Background Image with Overlay */}
    <div className="relative">
      <div className="absolute w-full h-full bg-black opacity-75"></div>
      <img
        src="https://s3-alpha-sig.figma.com/img/6882/d858/fa8dcf10a8262f68324a138ca2cab626?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m4bhxGBqcLgAIBWp5p2d5HZSkOA-hlbH52HzL3LEMVXZ5moPZN8v6PMsow-ff~7dlITzRrGRzN0wzfkUTONlCYjuHWg6tgPhl~dGH7ILPPKeGscwEU33L0A-IrWhmShVfQm70Q9cXrbfbP3yjuhgsmYIsUgZpsjAFvcdEcQ47x3qHbiXwWIhzHetC64-KY2ZqYdqB9xK6cPLDF~SFZ2T943~Hmem8E7mDVwYYvJHBvv6Cq5ZwbXbbwcBE0b89xuiSassTaIKRhtl1xAwuwKsugZs41O26h4-I3X9L4iD6AzFDPlU9BQXuO33uzpULgCWhz8bUYglC9JtVLdmcMdhGQ__"
        alt="Explore Categories"
        className="h-[20rem] sm:h-[27rem] md:h-[20rem] lg:h-[15rem] w-full object-cover border-1 border-white"
      />
    </div>
  </div>

 
  <div className="flex z-40  w-full  flex-wrap justify-center items-center absolute top-[10rem] gap-12">
    {imgDAta1.map((category, index) => (
      <div
        key={index}
        className="text-center flex flex-col items-center"
      >
        <img
          src={category.url}
          alt={category.text}
          className="w-[3rem] h-[3rem] sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-white z-20"
        />
        <p className="mt-2 text-white text-sm md:text-base lg:text-lg">
          {category.text}
        </p>
      </div>
    ))}
  </div>
</section>


      <section className="py-12">
        <div className="flex flex-col justify-start items-start w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-center">Testimonials</h2>
          <p className="text-center text-gray-300 mb-12">
            Don’t just take our word for it – see what actual users of our
            service have to say about their experience.
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-3 w-10/12 mx-auto mt-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#262626] px-9 py-6  rounded-lg  max-w-xs text-center"
            >
              <p className="text-white">{testimonial.text}</p>
              <div
                className="w-12 h-12 rounded-full bg-gray-600 mx-auto bg-cover"
                style={{ backgroundImage: `url(${testimonial.url})` }}
              ></div>

              <div className="flex justify-center">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <span
                      key={index}
                      className={`h-5 w-5 ${
                        index < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                  ))}
              </div>
              <div className="mt-4">
                <strong className="block text-white">
                  {" "}
                  {testimonial.name}
                </strong>
                <span className="text-sm text-gray-400">
                  {" "}
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="bg-gray-800 py-20 bg-cover w-full  border-y-[1px] border-white"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="flex justify-around gap-1  text-center text-white">
          <div className="">
            <h3 className="text-base sm:text-3xl font-bold ">151+</h3>
            <p className="text-sm sm:text-2xl ">Happy Partygoers Served!</p>
          </div>
          <div>
            <h3 className="text-base sm:text-3xl  font-bold ">100+</h3>
            <p className="text-sm sm:text-2xl">Cities Covered!</p>
          </div>
          <div>
            <h3 className="text-base sm:text-3xl  font-bold ">10K+</h3>
            <p className="text-sm sm:text-2xl">Events Hosted</p>
          </div>
          <div>
            <h3 className="text-base sm:text-3xl  font-bold ">2500+</h3>
            <p className="text-sm sm:text-2xl">Companies We Collab With</p>
          </div>
        </div>
      </footer>

      <section className="py-24">
        <h2 className="text-3xl font-bold text-start w-[80%] mx-auto">
          Latest Posts
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[1, 2, 3].map((post, index) => (
            <div className="max-w-sm px-2  text-white rounded-lg overflow-hidden">
              {/* Image */}
              <img
                src="https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9D2ZqibGZLPathLN7gN78Qk5eheBFTt7YhElXqJc1KD8QmhAX7oP2NrGPS9vAH-F-gOZe9n11LrnuzMMXwBAYXA4BsJK1bDiH4CURxdWHhd-pWdFfkg~Gd~O2G5rjJRyFH3s73bt1-84PKWGlzJDACsrzCFn9zR~hcecjW2axWH9Ym-n7UnJcaDPNh~5hddIpObRii7aVRLnvTb6b6anFalClimV4aPtAOG7Bsro-s9sNuu-QBA8S2P8NV6PI2Ntv-RbDaLNpAxvYBIcS1hlNd7oKq2oSfqaRzvymViJUB9uVXJ6LL0e-ylAiPrZTAdtm0TUKDLZ19eo1UtbxUbWA__" // Replace with your image URL
                alt="Event"
                className="w-[100%] h-[16rem] rounded-2xl "
              />

              {/* Content */}
              <div className="py-4">
                {/* Tag */}
                <span className="bg-[#262626] text-sm text-[#f5167e] uppercase font-semibold px-3 py-1 rounded-md">
                  Events
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold mt-3">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form.
                </h2>

                {/* Author and Date */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/40b7/c131/faedfd7f834c47ba118f3895ffc519cd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PvnU0DwgZCWm3QrmAwyO30-aKGLYp70CdlvIcZRT9T9Hw~EiOOcvQhygOUVpWCxqCQSS1z-J3jAyfgLvDDoHT4exm3xXNXVx2414I8v6UZrtc4ebDUCjmqbzG1y9BhI2lNHaDlNBh6d7fdLUN5NJuDCu7MBLzx9gf54J2mcZc~hZhhZ3npRFGjgRruXkL5d2K2r7P6b~IFiVVeToQ1AiAF28i79t-owXlfIoSL93t1mrQvMTz8l1xfqW~Ho5BgUbWhMGGYJ~mp0pRVNQIqLy04mlwIJdDWWt4zAfpc3EOeIF8ygNjO5Ey2uX6hN14VgUAUZgtT~vsDxk2l1MgDWSnQ__" // Replace with author's image URL
                      alt="Author"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-[#97989f]">
                      Tracey Wilson
                    </span>
                  </div>
                  <span className="text-sm text-[#97989f]">
                    August 20, 2022
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Thirdpage;
