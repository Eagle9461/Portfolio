import Typewriter from "typewriter-effect";

export default function Typing() {
  return (
    <div className="text-center h-8">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Full Stack Developer</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Blockchain Developer</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Open-Source Contributor</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">Web3 Fan</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: "",
          delay: 17,
        }}
      />
    </div>
  );
}
