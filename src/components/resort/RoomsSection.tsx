import Link from "next/link";
import Image from "next/image";
import { BedDouble } from "lucide-react";
import { roomsContent, roomTypes } from "@/data/Resort.data";
import styles from "@/styles/resort/RoomsSection.module.css";

export default function RoomsSection() {
  return (
    <section id="rooms" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{roomsContent.eyebrow}</p>
            <h2 className={styles.heading}>{roomsContent.heading}</h2>
            <p className={styles.body}>{roomsContent.body}</p>
          </div>
          <Link href={roomsContent.ctaHref} className={`btn btn-secondary ${styles.headerCta}`}>
            {roomsContent.ctaLabel} →
          </Link>
        </div>

        <div className={styles.grid}>
          {roomTypes.map((room) => (
            <div key={room.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={room.imageUrl}
                  alt={room.imageAlt}
                  fill
                  sizes="(min-width: 860px) 33vw, 100vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.iconWrap}>
                  <BedDouble size={14} />
                </span>
                <div>
                  <h3 className={styles.title}>{room.title}</h3>
                  <p className={styles.description}>{room.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
