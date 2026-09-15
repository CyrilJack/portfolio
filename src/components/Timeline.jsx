function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item" key={index}>
          
          <div className="timeline-date">
            {item.period}
          </div>

          <div className="timeline-marker"></div>

          <div className="timeline-content">
            <h3>{item.title}</h3>

            <h4>{item.company || item.school}</h4>

            <p>{item.description}</p>

            {item.technologies && (
              <div className="timeline-technologies">
                {item.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            )}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Timeline;