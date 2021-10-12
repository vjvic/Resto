import { useState } from "react";
import { Paragraph } from "styles/Section";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "styles/Button";
import styled from "styled-components";

const BookContainer = styled.section`
  min-height: 100vh;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;

  ${Button} {
    margin-top: 1.5rem;
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

const BookImg = styled.div`
  img {
    margin-left: auto;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

const BookTitle = styled.h1`
  padding: 1rem 0;
`;

const InputWrapper = styled.div`
  margin: 1rem 0;

  input {
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background: none;

    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.primary};
    }
  }

  label {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.8;
  }
`;

const Book = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <BookContainer>
      <div>
        <div>
          <BookTitle>Make a reservation</BookTitle>
          <Paragraph>
            Please remember that, you can book a table with maximum of 4 guests.
          </Paragraph>
        </div>

        <form>
          <InputWrapper>
            <label>Name</label>
            <input type="text" />
          </InputWrapper>

          <InputWrapper>
            <label>Email</label>
            <input type="email" />
          </InputWrapper>

          <InputWrapper>
            <label>Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </InputWrapper>

          <InputWrapper>
            <label>Number of guests</label>
            <input type="number" max="4" />
          </InputWrapper>

          <Button
            color="primary"
            size="lg"
            round
            onClick={() => router.push("/book")}
          >
            Book
          </Button>
        </form>
      </div>
      <BookImg>
        {/* eslint-disable */}
        <img src="/booking.svg" alt="booking" />
      </BookImg>
    </BookContainer>
  );
};

export default Book;
