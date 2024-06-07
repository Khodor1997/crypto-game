import axios from 'axios'

interface EthPriceData {
    ask: string;
    bid: string;
    price: string;
    rfq_volume: string;
    size: string;
    time: string;
    trade_id: number;
    volume: string;
}

export const getEthPrice = async (): Promise<EthPriceData> => {
    const { data } = await axios(
      'https://api.pro.coinbase.com/products/ETH-USD/ticker'
    )
    return data
  }