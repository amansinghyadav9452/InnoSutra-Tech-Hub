import { ArrowUpRight, Clock, Star, Users } from "lucide-react";

type Course = {
  id: string;
  title: string;
  category: string;
  rating: number;
  students: string;
  hours: string;
  price: string;
  old: string;
  level: string;
  icon: string;
};

function getDiscount(price: string, oldPrice: string) {
  const current = Number(price.replace(/[^0-9]/g, ""));
  const original = Number(oldPrice.replace(/[^0-9]/g, ""));

  if (!current || !original || original <= current) {
    return null;
  }

  return Math.round(((original - current) / original) * 100);
}

export default function CourseCard({ course }: { course: Course }) {
  const discount = getDiscount(course.price, course.old);

  return (
    <a
      href={`/courses/${course.id}`}
      className="course-card-3d group block"
    >
      <div className="course-card-3d-shell">
        <div className="course-card-3d-visual">
          <div className="course-card-3d-glow" />
          <div className="course-card-3d-grid" />

          <div className="course-card-3d-code">
            <span>learn()</span>
            <span>build()</span>
            <span>create()</span>
            <span>deploy()</span>
          </div>

          <div className="course-card-3d-device">
            <div className="course-card-3d-screen">
              <span className="course-card-3d-screen-dot" />
              <strong>{course.icon}</strong>
            </div>
            <div className="course-card-3d-base" />
          </div>

          <div className="course-card-3d-icon">
            {course.icon}
          </div>

          <span className="course-card-3d-category">
            {course.category}
          </span>

          <span className="course-card-3d-badge">
            <span>★</span>
            {course.level}
          </span>

          <span className="course-card-3d-arrow">
            <ArrowUpRight size={17} />
          </span>
        </div>

        <div className="course-card-3d-body">
          <div className="course-card-3d-kicker">
            <span>INNOSUTRA COURSE</span>
            {discount ? <strong>{discount}% OFF</strong> : null}
          </div>

          <h3 className="course-card-3d-title">
            {course.title}
          </h3>

          <p className="course-card-3d-description">
            Practical projects, guided lessons and career-ready skills.
          </p>

          <div className="course-card-3d-meta">
            <span className="course-card-3d-rating">
              <Star size={14} fill="currentColor" />
              {course.rating}
            </span>
            <span>
              <Users size={14} />
              {course.students}
            </span>
            <span>
              <Clock size={14} />
              {course.hours}
            </span>
          </div>

          <div className="course-card-3d-price-row">
            <div>
              <strong>{course.price}</strong>
              <del>{course.old}</del>
            </div>

            <span className="course-card-3d-cta">
              View Course
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
