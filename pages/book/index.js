import { useState } from "react";
import { Paragraph } from "styles/Section";
import { BookContainer, BookImg, BookTitle, InputWrapper } from "./Book.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "styles/Button";

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
