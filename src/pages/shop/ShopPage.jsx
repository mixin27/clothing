import React from 'react';
import { CollectionPreview } from '../../components/collection';
import { SHOP_DATA } from '../../sampledata/shop';
import './ShopPage.styles.scss';

const ShopPage = () => {
  const [collections, setCollections] = React.useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default ShopPage;
