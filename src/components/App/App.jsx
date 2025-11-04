import { useState } from "react";
import "./App.css";

function App() {
  const [pallets, setPallets] = useState([]);

  const [activePallet, setActivePallet] = useState({});

  const [currentOrder, setCurrentOrder] = useState("")

  const [orders, setOrders] = useState([
    {
      id: "1",
      number: "1290",
      date: "25.10.2025",
      marketplace: "Озон",
      totalPallets: "12",
      SKU: 10,
      plan: 1278,
      fact: 1290,
      pallets: [
        {
          number: "1",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "2",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "3",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
      ],
    },
    {
      id: "2",
      number: "1291",
      date: "14.06.2025",
      marketplace: "ВБ",
      totalPallets: "2",
      SKU: 7,
      plan: 452,
      fact: 158,
      pallets: [
          {
        number: "1",
        mono: "94",
        mix: "12",
        withoutDM: "64",
        SUMM: "170",
        storeKeeper: "Оля Артур",
        statusMono: "0",
        statusMix: "1",
      },
              {
          number: "2",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
      ],
    },
        {
      id: "3",
      number: "2225",
      date: "14.06.2025",
      marketplace: "ВБ",
      totalPallets: "2",
      SKU: 7,
      plan: 1492,
      fact: 211,
      pallets: [
          {
        number: "1",
        mono: "94",
        mix: "12",
        withoutDM: "64",
        SUMM: "170",
        storeKeeper: "Оля Артур",
        statusMono: "0",
        statusMix: "1",
      },
      ],
    },
        {
      id: "4",
      number: "2202",
      date: "14.06.2025",
      marketplace: "Озон",
      totalPallets: "16",
      SKU: 7,
      plan: 2050,
      fact: 976,
      pallets: [
          {
        number: "1",
        mono: "94",
        mix: "12",
        withoutDM: "64",
        SUMM: "170",
        storeKeeper: "Оля Артур",
        statusMono: "0",
        statusMix: "1",
      },
              {
          number: "2",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "3",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "4",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "5",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "6",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "7",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "8",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "9",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "10",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "11",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "12",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "13",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "14",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "15",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
                {
          number: "16",
          mono: "89",
          mix: "0",
          "without DM": "81",
          SUMM: "170",
          storeKeeper: "Молчан Олеся",
          status: "2",
        },
        
      ],
    },
  ]);

  function handleSelectPallet(e) {
    activePallet.classList?.remove("activePallet");
    if (e.target == activePallet) {
      setActivePallet({});
      return;
    }
    if (
      e.target.classList.contains("mono") ||
      e.target.classList.contains("mix")
    ) {
      setActivePallet(e.target);
      e.target.classList.add("activePallet");
    }
  }

  function handleChangeStatus(e) {
    const newStatus = e.target.value;
    if (activePallet.classList) {
      const isMono = activePallet.classList.contains("mono");
      const status = isMono ? "statusMono" : "statusMix";
      const selectedPalletNumber = activePallet.parentNode.value;
      setPallets(
        pallets.map((pallet) => {
          if (+pallet.number !== selectedPalletNumber) return pallet;
          else return { ...pallet, [status]: newStatus || 0 };
        })
      );
    }
    setActivePallet({});
  }

  function handleSelectOrder(e) {
    const selectedOrder = orders.find(order => order.id == e.target.parentNode.value)
    setPallets(selectedOrder.pallets)
    setCurrentOrder(`00УТ-00${selectedOrder.number} ${selectedOrder.marketplace}`)
  }

  const viewPallets = pallets.map((pallet, i) => (
    <li
      onClick={handleSelectPallet}
      key={i}
      value={i + 1}
      className={`progress__list ${
        pallet.statusMono == 1 && pallet.statusMix == 1 ? "status-1" : ""
      }`}
    >
      <p className="progress__item">{pallet.number}</p>
      <p className={`progress__item status-${pallet.statusMono} mono`}>
        {pallet.mono}
      </p>
      <p className={`progress__item status-${pallet.statusMix} mix`}>
        {pallet.mix}
      </p>
      <p className="progress__item">{pallet.withoutDM}</p>
      <p className="progress__item">{pallet.SUMM}</p>
      <p className="progress__item progress__item_last">{pallet.storeKeeper}</p>
    </li>
  ));

  const viewOrders = orders.map((order, i) => (
    <li className="ordersContainer__list" key={i} value={order.id}>
      <p className="ordersContainer__item" onClick={handleSelectOrder}>{`00УТ-00${order.number}`}</p>
      <p className="ordersContainer__item">{order.date}</p>
      <p className="ordersContainer__item">{order.marketplace}</p>
      <p className="ordersContainer__item">{order.SKU}</p>
      <p className="ordersContainer__item">{order.plan}</p>
      <p className="ordersContainer__item">{order.fact}</p>
      <div className="ordersContainer__item ordersContainer__item_last"><div className="ordersContainer__bar" style={{width: `${order.fact/order.plan*100}%`}}></div></div>
    </li>
  ));

  return (
    <div className="body">
      <div className="orderPanel">
        <div className="orderTitle">
          <p className="orderTitle__item">Отгрузка</p>
          <p className="orderTitle__item">Дата</p>
          <p className="orderTitle__item">Склад</p>
          <p className="orderTitle__item">Кол-во SKU</p>
          <p className="orderTitle__item">Кол-во план</p>
          <p className="orderTitle__item">Кол-во факт</p>
          <p className="orderTitle__item orderTitle__item_last">
            Прогресс выполнения
          </p>
        </div>
        <ul className="ordersContainer">{viewOrders}</ul>
      </div>
      <div className="progressPanel">
        <div className="progress">
          <h2 className="progress__header">{currentOrder}</h2>
          <div className="progress__title">
            <p className="progress__item">палет</p>
            <p className="progress__item">моно</p>
            <p className="progress__item">микс</p>
            <p className="progress__item">без чз</p>
            <p className="progress__item">всего</p>
            <p className="progress__item progress__item_last">кладовщик</p>
          </div>
          <ul className="progress__container">{viewPallets}</ul>
        </div>
        <div className="statuses">
          <h2
            className="statuses__header status-box"
            value="0"
            onClick={handleChangeStatus}
          >
            Статусы
          </h2>
          <ul className="statuses__container">
            <li
              className="status-2 status-box"
              value="2"
              onClick={handleChangeStatus}
            >
              В контур
            </li>
            <li
              className="status-3 status-box"
              value="3"
              onClick={handleChangeStatus}
            >
              ждем гис мт
            </li>
            <li
              className="status-1 status-box"
              value="1"
              onClick={handleChangeStatus}
            >
              готов
            </li>
            <li
              className="status-4 status-box"
              value="4"
              onClick={handleChangeStatus}
            >
              ошибка ЧЗ
            </li>
            <li
              className="status-5 status-box"
              value="5"
              onClick={handleChangeStatus}
            >
              ошибка в контуре
            </li>
            <li
              className="status-6 status-box"
              value="6"
              onClick={handleChangeStatus}
            >
              ошибка кладовщика
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
