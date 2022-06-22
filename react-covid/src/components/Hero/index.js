import img from "../../assets/img/img1.png"
import Button from "../ui/Button";
import StyledHero from "./Hero.styled.js";

function Hero() {
  return(
    <StyledHero>
      <div>
        <section> 
          <div className="hero__left">
            <h2>Covid ID</h2>
            <p>Monitoring Perkembangan Covid</p>
            <br />
            <p className="hero__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quod modi et ea quos perspiciatis laudantium, numquam, adipisci vitae nam provident molestias tempora, consequatur deleniti hic. Saepe illum, accusamus obcaecati beatae illo iure quaerat numquam.
            </p>
            <Button variant='secondary' size='md'>Vaccine</Button>
          </div>
          <div className="hero__right">
            <img
            src={img} 
            alt="pict" />
          </div>
        </section>
      </div>
    </StyledHero>
  )
}

export default Hero;
