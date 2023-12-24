import styles from "./DebitCard.module.css";

function DebitCard() {

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
            <button className={styles.btn}>Confirm and Pay</button>
            <button className={styles.btn}>Cancel</button>
          </div>
        </div>

        {/* front card */}
        <div className={styles.card2}>
            <div className={styles.cardTop}>
                <h1 className={styles.heading}>CARD</h1>
                <img src="/img/chip.png" alt="chip" className={styles.chipimg} />
            </div>
            <div className={styles.formWrapper}>
                <span className={styles.span}>
                <input type="text" placeholder="#### #### #### ####" className={styles.cardNum}/>
                <input type="text" placeholder="mm/yy" className={styles.expire} />
                </span>
                <input type="text" placeholder="Scaler Discord" className={styles.name} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default DebitCard;


    // ```
    // var str=str.split(" ").join("").split("");
    // var formatted=[];
    // while(str.length) {
    //   for(var i=0; i<3 && str.length; i++) {
    //     formatted.push(str.shift());
    //   }
    //   if(str.length) formatted.push(" ");
    // }
    // return formatted.join("");
    // ```