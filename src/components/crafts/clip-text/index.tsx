import { ComponentContainer } from "@/components/component-container"

const url =
  "https://img.freepik.com/free-vector/geometric-groovy-pattern_23-2148854270.jpg?semt=ais_hybrid"

export const ClipText = () => {
  return (
    <ComponentContainer componentLabel="Clip Text">
      <svg className="absolute -top-[999px] left-[999px] size-0">
        <defs>
          <clipPath id="my-clip">
            <text
              x="50px"
              y="300px"
              textLength="420"
              lengthAdjust="spacing"
              fontFamily="Geist"
              fontSize="110px"
              fontWeight="900"
              fontStyle="italic"
            >
              DogCat
            </text>
          </clipPath>
        </defs>
      </svg>

      <section>
        <figure style={{ clipPath: "url(#my-clip)" }} className="size-full">
          <img
            src={url}
            alt="Description"
            className="aspect-video min-h-[500px] object-cover transition-all duration-300 hover:scale-105"
          />
        </figure>
      </section>
    </ComponentContainer>
  )
}
