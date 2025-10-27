import React from 'react';
import { Form, Button } from 'antd';
import Flex from '@components/Flex';
import CustomInput from '@components/CustomInput/CustomInput';
import styles from './ContactSection.module.scss';
import CustomTextArea from "@components/CustomTextArea/CustomTextArea";

import hero from '@assets/img/HeroImage.jpg'

export default function ContactSection() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form submitted:', values);
  };

  return (
    <section className={styles.contactSection}>
      <Flex className={styles.card} justify="space-between" gap={30}>
        <Flex vertical gap={24} justify={'space-between'} className={styles.leftBlock}>
          <Flex vertical gap={12}>
            <h2 className={styles.title}>Have Questions? We're Here to Help!</h2>
            <p className={styles.subtitle}>
              Our expert team is ready to assist you with any questions about our auctions,
              bidding process, or vehicle inspections. Get in touch today!
            </p>
          </Flex>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className={styles.form}
          >
            <Flex gap={16}>
              <Form.Item name="lastName" className={styles.formItem}>
                <CustomInput width={'100%'} placeholder="Last Name" />
              </Form.Item>
              <Form.Item name="firstName" className={styles.formItem}>
                <CustomInput width={'100%'} placeholder="First Name" />
              </Form.Item>
            </Flex>

            <Form.Item name="email" className={styles.formItem}>
              <CustomInput placeholder="Email" type="email" />
            </Form.Item>

            <Form.Item name="phone" className={styles.formItem}>
              <CustomInput placeholder="Phone Number" />
            </Form.Item>

            <Form.Item name="message" className={styles.formItem}>
              <CustomTextArea placeholder="Message" rows={4} />
            </Form.Item>

            <Flex gap={16} justify="start" className={styles.buttons}>
              <Button htmlType="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
                Send Message
              </Button>
              <Button className={`${styles.btn} ${styles.btnOutline}`}>
                Ask to chat
              </Button>
            </Flex>
          </Form>
        </Flex>

        <div className={styles.imageBlock}>
          <img
            src={hero}
            alt="Shipping containers"
            className={styles.image}
          />
        </div>
      </Flex>
    </section>
  );
}