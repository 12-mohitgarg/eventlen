import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Lightbox1 = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    "https://s3-alpha-sig.figma.com/img/60a7/8fe4/ce390c6696651d2ecd163e996033c49b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ltWl5g7-0LFmKJyO4L7k5Yr0vi1~9ss2m8RfawmHq~afmabRvEchJlN402LDi2QRTSoivX20ga6x-jx97PGH1b3KF8AxMllPaFQul-f5Io~dek9AcP2e28pvdWg-MoB36B5MB8oMD-hZcdRFGBwlB18L5tWcUXABhYZqteL4aj~-0s~fqUUbV~EKWjy6N26-K31sYRwTb4WjNECm~F7KffTMsnXDmpmWujaz49v-lTrGaCiFjgXXfMnFSg9l3mJ0xN6ZEkeXWiLSPstOM5OjKjCQWABg2vr~YalnGRxe~4V-9tYJYE2sImo3x14Ir0ttoj1a~U0IyaDoDY7nnqxtCQ__",
    "https://s3-alpha-sig.figma.com/img/8178/6c2e/e11ee7e59391e1babbca0a2fb1ceb26c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dU0xQNmZEOJazMg3OuVquCicg2lnhH8V5UTdtt8SGr801ScYBVH29p54ndKTiMtuCMaHF87zjeZrL5phIkJ3pesYkgm~tGys4WY31YY0WF2P0qBMjFY4PCLF5p2IDP2c3y7WnL1SFar69me1ul4XkVg3udkLt0zkJ96onRqgMKoRaENbd9OWe3rV7tDp0D75E0IsMkVDsSiCbgd~mTGv~oMb5GrrJSGXhI9TcumqWZkwCAs1L~A3-RGz55eiOtYUzvIVSvTTYg4untMBix6UDHgPsfY1RNFsN0wwghzlpUxV4YUwBTvlckSFSiCDfyBlQfYxBUj-sAEDXuJzBQRuzg__",
    "https://s3-alpha-sig.figma.com/img/15b9/f126/cbd8968b2c8d0e21d748a3a8b5ad29d9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzxsT01JdxhXn-tclgVYaMo29jifSDDDZDvICOtXxGm8sk4vrGrY5kgf5tgl8-5xzDgEq6DmRJMrLPczfOJAZKT1zh73Vzrl53wtLis1oUT40dixxWe7PdTeG~N4o5fnWrAab~u48Bjt5O0ZlefGrpZ-ySiEqQNKClQgKH6ElABxqu~AqV1Q5SKNPr6doB4G27eEQ-q4UNNp-B2~XrIogb4PJZcMEc7dJIgyXcN-1F4UZPAuQIHNT~a5vtYOlEzAg9fzokBiJRfCDBa6B61z-zCeIJCS9WRnBWD5zEYjueZAZvCbuRvs-Z5BOy2DSRx5RIWRSub-EsTqQDy6Ke2NLg__",
    "https://s3-alpha-sig.figma.com/img/72e3/7157/df9f455d89e7485051d5220961e4d9a4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-pgfxwgx~JVV54qzzO-pUJCX4ZpmUfCNtqSkU1zb0w~HrALPnvUzxclpR-FC3orujixAav3ARoLGKCtVrhsVvZnpZn3jQ0Im~t13ZTbbo9wa-AjC~JvixXeWNOnUAgGKqvcnF1WyeS7Y5bMo4KYqL8EED372OPeJ9ZRH1-RLLLxSDqb~vYkrGoK3nK-1~NTn1AYR~OjmvL4iDu3pyzH3J-lxeraNp4q16MrphEOuGK6xTKcTP30cmPCGdOS2H-ZrtpUpCa2iJFp7AVxXyM--00XVFMYW2uQaowex-xGGRey~bNNDkegqKXLoSnDeup0F7PCr-fzgSxuIw1EWgkxxw__",
    "https://s3-alpha-sig.figma.com/img/1d11/4730/18806e4d2287700f2e54c975d903f84a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DY2WTdMvxt2GGyPcC5jHGfT3t5S07LAAaVl2vTj9itIlcGABI-FQPqTE9N14lWaJ7N2Z335QM620vzyPfEksGfH-qtX6HsZHXVN5Q1wc7lgomPGKB87M-9C7e2sJVXAXYhknQMxWfUT~4qoRcD5R1wJkl9PTSx8dlFmytHwXcBRiOmTdBjKOaC9z7E9dPQcOlGqcnd8AO5aJ2AgxwRStt9Ukpq1KjZUq9kyPdh0-zQoU90HLFwmE1E19sbvg8gKo1EeZHNwWOJXCJfiQYENomurlgkNB3KDrnLK~QhqKzBdxEblaNBA6esE0oHrC4hbwIWgzwWsgs3a-xMaXMPe8HA__",
    "https://s3-alpha-sig.figma.com/img/6afe/5bb6/371e81c94225b1fd92b47440cb9d81b1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UC5blKa-y9Pb9sVT~VqYq0d-b4GiP0aQgS9MuLTwo0cakeE~Zbd5x5PxDN2tggcCN4pub1YtQLJrTvCkgDXFxONWj5HnP3Z2MdjGm-8nMhNHvtpZvWlQ23CD2mxFKqoCQzejNinEbvgRGr9lSZuMKBqGjuYX~NNnkPvxcoTObiSUop2FDkhuOwNY~ZEaZusgVMERFENtngQ9kuWmrdZWZdYYuj47UaL94oeukRqqPHN~JvO0EbYGGmQSDnHhw27pbk3qWM5JFB0B-eINuxzDdY4EO8P8fdLskm3e5npZxXBItHqP7LiFtwbUaipjyiya-B3Y40eCjOdCgZED3dbgZw__"
    // Add other image URLs here
  ];

  return (
    <div>
      <section className="mx-[8rem] ">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === 0 || index === 5 ? "col-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-[15rem] rounded-lg cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            </div>
          ))}
        </div>
      </section>
      {isOpen  && (
        
        
        <Lightbox
        
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

    </div>
  );
};



export default Lightbox1