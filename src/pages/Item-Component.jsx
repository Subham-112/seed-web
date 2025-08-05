import "./Item-Component.css";

export default function ItemComponent({ items, closeWin }) {
  return (
    <div className="item-sec">
      <div className="item-det">
        <img src={items.image} />
        <h1>{items.name}</h1>
      </div>

      {/* Quick Selection */}
      <div className="item-qty">
        <h2>Quick Select:</h2>
        <span>
            <button>1</button>
            <button>5</button>
            <button>15</button>
            <button>25</button>
            <button>100</button>
        </span>
      </div>
      <div className="cust-qty">
        <h2>Custom quantity</h2>
        <input placeholder="Min: 1" />
      </div>
      <span className="item-cls-btn">
        <button onClick={() => closeWin()}>click</button>
      </span>
    </div>
  );
}
