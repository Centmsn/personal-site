import styled from "styled-components";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

import { device } from "../../GlobalStyles";

gsap.registerPlugin(TextPlugin);

const EDITOR_COLORS = [
  "rgb(3, 172, 240)",
  "rgb(12,200,30)",
  "hsl(120, 77%, 27%)",
  "#ead84e",
  "#450c91",
  "#fff",
];

const Editor = () => {
  const screenRef = useRef(null);
  const pipeRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    const screen = screenRef.current.children;
    const pipe = pipeRef.current;
    const lines = linesRef.current;

    const tl = gsap.timeline({
      defaults: { ease: "none" },
    });

    gsap.to(pipe, {
      opacity: 0,
      yoyo: true,
      repeat: -1,
      duration: 0.1,
      repeatDelay: 0.5,
    });

    tl.to(screen[0], {
      text: {
        value: `&#60;body></br>`,
      },
      delay: 1.5,
    })
      .to(screen[1], { text: `&#60;h1>` })
      .to(lines, {
        text: {
          value: `1<br/>2<br/>3`,
          type: "diff",
        },
      })
      .to(screen[2], {
        text: {
          value: ` Cześć, jestem Wojtek `,
          speed: 1,
        },
      })
      .to(screen[3], {
        text: {
          value: `&#60;/h1></br></br>`,
        },
      })
      .to(lines, {
        text: {
          value: `1<br/>2<br/>3<br/>4<br/>5`,
          type: "diff",
        },
      })
      .to(screen[4], {
        text: {
          value: `&#60;p>`,
        },
      })
      .to(screen[5], {
        text: {
          value: `Możesz użyć kropek do nawigacji po witrynie`,
          speed: 1,
        },
      })
      .to(screen[6], {
        text: {
          value: `&#60;/p></br></br>`,
        },
      })
      .to(lines, {
        text: {
          value: `1<br/>2<br/>3<br/>4<br/>5</br>6</br>7`,
          type: "diff",
        },
      })
      .to(screen[7], {
        text: {
          value: `&#60;p>`,
        },
      })
      .to(screen[8], {
        text: {
          value: `Jeżeli korzystasz z komputera to do dyspozycji masz również strzałki`,
          speed: 1,
        },
      })
      .to(screen[9], {
        text: {
          value: `&#60;/p></br></br>`,
        },
      })
      .to(lines, {
        text: {
          value: `1<br/>2<br/>3<br/>4<br/>5</br>6</br>7</br>8</br>9`,
          type: "diff",
        },
      })
      .to(screen[10], {
        text: {
          value: `&#60;p>`,
        },
      })
      .to(screen[11], {
        text: {
          value: `Wszelkie informacje zawodowe znajdziesz <a href='#/webDev'>tutaj</a>`,
          speed: 1,
        },
      })
      .to(screen[12], {
        text: {
          value: `&#60;/p></br></br>`,
        },
      })
      .to(lines, {
        text: {
          value: `1<br/>2<br/>3<br/>4<br/>5</br>6</br>7</br>8</br>9</br>10</br>11`,
          type: "diff",
        },
      })
      .to(screen[13], {
        text: {
          value: `&#60;small>`,
        },
      })

      .to(screen[14], {
        text: {
          value: `Będzie mi bardzo miło jeśli oprócz kwestii zawodowych zechesz zwiedzić resztę witryny`,
          speed: 1,
        },
      })
      .to(screen[15], {
        text: {
          value: `&#60;/small>`,
        },
      })
      .to(lines, {
        text: {
          value: `1<br/>2<br/>3<br/>4<br/>5</br>6</br>7</br>8</br>9</br>10</br>11</br>12</br>13</br>14</br>15</br>16</br>17`,
          type: "diff",
        },
      });
  }, []);

  return (
    <Wrapper>
      <LineNumber ref={linesRef}>1{<br />}2</LineNumber>
      <Screen ref={screenRef}>
        <span></span>
        <span></span>
        <h1></h1>
        <span></span>
        <span></span>
        <p></p>
        <span></span>

        <span></span>
        <p></p>
        <span></span>

        <span></span>
        <p></p>
        <span></span>

        <span></span>
        <small></small>
        <span></span>
        <Pipe ref={pipeRef}>|</Pipe>
      </Screen>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  border-left: 4px solid ${({ theme }) => theme.colors.yellow};

  font-size: 2rem;
  font-family: "Source Code Pro", monospace;

  span {
    color: gray;
  }

  p {
    display: inline;
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  overflow-y: auto;

  h1 {
    display: inline;

    font-size: 1.75rem;
    line-height: 1rem;
    background-color: ${({ theme }) => theme.colors.gray};
    text-shadow: none;
  }
`;

const LineNumber = styled.div`
  flex-basis: 5%;
  min-width: 50px;
  height: 100%;

  border-right: 1px solid rgb(80, 80, 80);

  text-align: center;

  color: rgb(165, 165, 165);

  padding: 5px;
`;

const Screen = styled.div`
  flex-basis: 90%;
  padding: 5px;

  color: white;

  small {
    display: inline;
    font-size: 2rem;
  }

  a {
    text-decoration-color: ${({ theme }) => theme.colors.gray};
  }

  @media ${device.tablet} {
    span {
      display: block;
    }
  }
`;

const Pipe = styled.p`
  font-size: 1.75rem;

  color: ${({ theme }) => theme.colors.yellow};
  display: inline;
`;

export default Editor;
