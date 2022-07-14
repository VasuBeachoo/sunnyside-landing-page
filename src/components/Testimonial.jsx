const Testimonial = ({ img, paragraph, name, title }) => {
  return (
    <div className="testimonial">
      <img src={img.src} alt={img.alt} className="testimonial__img" />
      <p className="testimonial__paragraph">{paragraph}</p>
      <h3 className="testimonial__name">{name}</h3>
      <p className="testimonial__title">{title}</p>
    </div>
  );
};

export default Testimonial;
