import { useCallback, useState } from "react";
import { AddressContainer, HeadingTitle, HeaderLayout, ConnectButton, NetworkTitle, MintButton } from "../styles/header";
import { useZora } from "../utils/ZoraProvider";
import { Link, useHistory } from "react-router-dom";

export const Header = () => {
  const [loading, setLoading] = useState(false);
  const { address, authenticate } = useZora();

  const history = useHistory();

  function mintNavigation() {
    history.push("/mint");
  }

  function homeNavigation() {
    history.push("/");
  }

  const handleConnectClick = useCallback(async () => {
    setLoading(true);
    try {
      await authenticate();
    } catch (e) {
      // TODO handle errors
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [authenticate]);

  const buttonSection = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MintButton
          onClick={mintNavigation}
          // disabled={loading}
        >
          Mint
        </MintButton>
        {address ? (
        <AddressContainer>
            {address.substr(0, 5)}...{address.slice(address.length - 3)}
        </AddressContainer>
      ) : (
        <ConnectButton
          onClick={handleConnectClick}
          // disabled={loading}
        >
          {loading ? "Connecting..." : "Connect"}
        </ConnectButton>
      )}
      </div>
    )
  }

  return (
    <HeaderLayout>
      <div className="flex items-center space-x-3">
        <Link onClick={homeNavigation} style={{textDecoration: "none", color: 'black'}}>
          <HeadingTitle>zAuction</HeadingTitle>
        </Link>
      </div>
      {buttonSection()}
    </HeaderLayout>
  );
}
