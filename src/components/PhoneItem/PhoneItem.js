// 경로 : src/components/PhoneItem/PhoneItem.js

import React from "react";
import styles from "./PhoneItem.module.scss";

const PhoneItem = ({ id, name, phone, onClick }) => {
  return (
    <div className={styles.phone_item}>
      <div className={styles.phone_item_left}>
        <div className={styles.phone_item_name}>{name}</div>
        <div className={styles.phone_item_phone}>{phone}</div>
      </div>
      <div className={styles.phone_item_right}>
        <button onClick={()=>onClick(id)}>삭제</button>
      </div>
    </div>
  );
};

export default PhoneItem;

//PhoneItem.module.scss 사용시

// import React from "react";
// import styles from "./PhoneItem.module.scss";

// const PhoneItem = () => {
//   return (
//     <div className={styles.phone_item}>
//       <div className={styles.phone_item_left}>
//         <div className={styles.phone_item_name}>홍길동</div>
//         <div className={styles.phone_item_phone}>010-0000-0000</div>
//       </div>
//       <div className={styles.phone_item_right}>
//         <button>삭제</button>
//       </div>
//     </div>
//   );
// };

// export default PhoneItem;
