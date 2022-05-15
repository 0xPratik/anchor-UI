import React, { useState } from 'react'
import AddressButton from '../components/common/AddressButton'
import AddressSelect from '../components/common/AddressSelect';


type Props = {}

const Componets = (props: Props) => {
    const networks = [
      { name: "Testnet" },
      { name: "mainnet" },
      { name: "rinkyby" },
      { name: "ropston" },
      { name: "polygon" },
      { name: "solana" },
    ];
    const [selected, setSelected] = useState(networks[0]);
  return (
    <div>
      <AddressButton>DY4r23e...c04wEA</AddressButton>
      <br />
      <AddressSelect
        networks={networks}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Componets;