"use client";
import { useEffect, useState } from "react";
import styles from "./DebitCard.module.css";

function DebitCard({n}) {
  const [cardNumber, setCardNumber] = useState("");
  const [isBackSpace, setIsBacKspace] = useState(false)

  useEffect(() => {
    if (cardNumber.trim()) {
    let str = cardNumber.split(" ").join("").split("");
    var formatted = [];
    while (str.length) {
      for (var i = 0; i < 4 && str.length; i++) {
        formatted.push(str.shift());
      }
      if (str.length) formatted.push(" ");
    }
    setCardNumber(formatted.join(""));
    }
  }, [cardNumber])

  const handleReset = () => {
    setCardNumber("")
  }

  const handleCardNumber = (e) => {
    if (cardNumber.length < 19) {
      setCardNumber(e.target.value)
    } else if (cardNumber.length === 19 && isBackSpace) {
      setCardNumber(e.target.value)
    } 
    else {
      setCardNumber(cardNumber)
    }
  };

  return (
    <div className={styles.debitcard}>
      <div className={styles.cardwrapper}>
        <div className={styles.card1}>
          <div className={styles.bar}></div>
          <div className={styles.cvvwrapper}>
            <label htmlFor="cvv" className={styles.cvvlabel}>
              CVV
            </label>
            <input
              type="number"
              id="cvv"
              className={styles.cvvinput}
              maxLength={3}
              placeholder="###"
            />
          </div>

          <div className={styles.btnWrapper}>
            <div>
              <label htmlFor="cvv" className={styles.cvvlabel}>
                CVV
              </label>
              <input
                type="number"
                id="cvv"
                className={styles.cvvinput}
                maxLength={3}
                placeholder="###"
              />
            </div>
            <button className={styles.btn} onClick={handleReset}>Reset</button>
            <button className={styles.btn}>Confirm and Pay</button>
          </div>
        </div>

        {/* front card */}
        <div className={styles.card2}>
          <div className={styles.cardTop}>
            <h1 className={styles.heading}>{n} CARD</h1>
            <img src="/img/chip.png" alt="chip" className={styles.chipimg} />
          </div>
          <div className={styles.formWrapper}>
            <span className={styles.span}>
              <input
                type="text"
                placeholder="#### #### #### ####"
                className={styles.cardNum}
                value={cardNumber}
                onChange={(e) => handleCardNumber(e)}
                onKeyDown={(e) => e.key === "Backspace" ?setIsBacKspace(true) : setIsBacKspace(false)}
              />
              <input
                type="text"
                placeholder="mm/yy"
                className={styles.expire}
              />
            </span>
            <input
              type="text"
              placeholder="Scaler Discord"
              className={styles.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DebitCard;

// ```

// ```
