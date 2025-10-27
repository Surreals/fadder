import React from 'react';

import Flex from "@components/Flex";
import Button from "@components/Button/Button";
import blogImg1 from "@assets/img/blog1.jpg"
import blogImg2 from "@assets/img/blog2.jpg"
import blogImg3 from "@assets/img/blog3.jpg"

import styles from './BlogSection.module.scss';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Bidding Strategies for Car Auctions',
    date: 'January 7, 2024',
    description: 'Learn the most effective strategies to win at car auctions and get the best deals on your dream vehicle.',
    image: blogImg1
  },
  {
    id: '2',
    title: 'Complete Car Inspection Checklist',
    date: 'January 15, 2024',
    description: 'A comprehensive guide to inspecting used cars before purchase to avoid costly surprises.',
    image: blogImg2
  },
  {
    id: '3',
    title: '2024 Electric Vehicle Market Trends',
    date: 'January 22, 2024',
    description: 'Discover the latest trends in the electric vehicle market and what to expect in 2024.',
    image: blogImg3
  }
];

export default function BlogSection() {
  return (
    <section>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Latest Insights from Our Blog</h2>
        <Flex className={styles.viewAllBtn}>
          View all
        </Flex>
      </div>
      
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <Flex key={post.id} vertical>
            <div className={styles.blogImage}>
              <img src={post.image} alt={post.title} />
            </div>

            
            <Flex vertical gap={24} className={styles.blogCard}>
              <div className={styles.blogDate}>{post.date}</div>
              <Flex vertical gap={8}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogDescription}>{post.description}</p>
              </Flex>
              <Button variant="secondary" className={styles.readMoreBtn}>
                Read more
              </Button>
            </Flex>
          </Flex>
        ))}
      </div>
    </section>
  );
}
