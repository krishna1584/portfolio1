"use client";

import React, { useMemo, useState } from "react";
import {
  Container,
  Input,
  InputData,
  Form,
  Row,
  Column,
  TextArea,
  Main,
  SubmitButton,
  StatusMessage,
} from "../../styles/pages/Contact";
import dynamic from "next/dynamic";
import PageTitle from "../../components/PageTitle";
import { motion } from "framer-motion";

function ContactClient() {
  const Map = useMemo(
    () => dynamic(() => import("../../components/Map"), { ssr: false }),
    []
  );

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const sendEmail = async (e) => {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      setMessage("Form endpoint is not configured.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Thanks! Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <Container>
      <Main>
        <PageTitle
          title="contact"
          stretchedLetter="n"
          overlayTitle="Hiring | Collaboration | Projects"
        />
        <Form onSubmit={sendEmail}>
          <Row>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Input
                type="text"
                name="username"
                placeholder="Your name"
                required
              />
              <div className="underline"></div>
            </InputData>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Input type="email" name="email" placeholder="Email" required />
              <div className="underline"></div>
            </InputData>
          </Row>
          <Column>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              name="subject"
              className="full-fill"
            >
              <Input type="text" placeholder="Subject" required />
              <div className="underline"></div>
            </InputData>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="full-fill"
            >
              <TextArea name="message" placeholder="Message" required />
              <div className="underline"></div>
            </InputData>
            <SubmitButton type="submit" disabled={isLoading}>
              <span>{isLoading ? "Sending..." : "Submit"}</span>
            </SubmitButton>
            {message ? (
              <StatusMessage
                variant={isError ? "error" : "success"}
                aria-live="polite"
                role="status"
              >
                {message}
              </StatusMessage>
            ) : null}
          </Column>
        </Form>
      </Main>
      <Map />
    </Container>
  );
}

export default ContactClient;
