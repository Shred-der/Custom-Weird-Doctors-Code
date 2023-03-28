import React from 'react';
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { CardanoWallet } from '@meshsdk/react';
import { useWallet, useAssets } from '@meshsdk/react';
import { BlockfrostProvider } from '@meshsdk/core';
import MetaDataCheck from './metadatacheck';

export default function SignIn() {
  const { connected, wallet } = useWallet();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const {hasSilver, hasGold, hasPlatinum, hasAir } = MetaDataCheck();  
  
  async function grantGoldRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantGoldrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  async function grantSilverRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantSilverrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  async function grantPlatinumRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantPlatinumrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  async function grantAirRole() {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await fetch('/api/grantAirrole');
      const data = await response.json();

      if (data.success) {
        alert('Success! Role Granted, Check Discord');
      } else {
        alert('Success! Role Granted, Check Discord');
      }
    } catch (error) {
      console.error(error);
      alert('Success! Role Granted, Check Discord');
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }



  // 1. (i) The user is signed into Discord and connected to wallet and has Gold CNFT
  if (connected && session && hasGold && !hasSilver && !hasPlatinum && !hasAir) {
    return (
      <div>
        <div>
        <h1>You have the required NFT with the Gold Medic property</h1>
        <button onClick={() => grantGoldRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Gold role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }



  // 1. (ii) The user is signed into Discord and connected to wallet and has Silver CNFT
  if (connected && session && hasSilver && !hasGold && !hasPlatinum && !hasAir) {
    return (
      <div>
        <div>
          <h1>You have the required NFT with the Silver Medic property</h1>
        <button onClick={() => grantSilverRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Silver role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }



  // 1. (iii) The user is signed into Discord and connected to wallet and has Platinum CNFT
  if (connected && session && hasPlatinum && !hasGold && !hasSilver && !hasAir) {
    return (
      <div>
        <div>
        <h1>You have the required NFT with the Platinum Medic property</h1>
        <button onClick={() => grantPlatinumRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Platinum role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }



   // 1. (iv) The user is signed into Discord and connected to wallet and has Air CNFT
   if ( connected && session && hasAir && !hasGold && !hasSilver && !hasPlatinum) {
    return (
      <div>
        <div>
        <h1>You have the required NFT with the Air Medic property</h1>
        <button onClick={() => grantAirRole()} disabled={disabled}>
            {loading ? "Please Wait..." : "Give me the Air role!"}
          </button>
          <a onClick={() => signOut()}>
            Sign out of Discord
          </a>
        </div>
      </div>

    );
  }

     // 1. (v) The user is signed into Discord and connected to wallet and has Silver, Gold, Platinum and Air
     if ( connected && session && hasSilver && hasGold && hasPlatinum && hasAir) {
      return (
        <div>
          <div>
          <h1>You have the Silver, Gold, Platinum and Air NFTs</h1>
          <button onClick={() => grantSilverRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Silver role!"}
            </button>
            <button onClick={() => grantGoldRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Gold role!"}
            </button>
            <button onClick={() => grantPlatinumRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Platinum role!"}
            </button>
          <button onClick={() => grantAirRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Air role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }


    // 1. (vi) The user is signed into Discord and connected to wallet and has Silver and Gold
    if ( connected && session && hasSilver && hasGold && !hasPlatinum && !hasAir)  {
      return (
        <div>
          <div>
          <h1>You have the Silver and Gold NFTs</h1>
          <button onClick={() => grantSilverRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Silver role!"}
            </button>
            <button onClick={() => grantGoldRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Gold role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }

    // 1. (vii) The user is signed into Discord and connected to wallet and has Silver and Platinum
    if ( connected && session && hasSilver && hasPlatinum && !hasGold && !hasAir) {
      return (
        <div>
          <div>
          <h1>You have the Silver and Platinum NFTs</h1>
          <button onClick={() => grantSilverRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Silver role!"}
            </button>
            <button onClick={() => grantPlatinumRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Platinum role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }


    // 1. (viii) The user is signed into Discord and connected to wallet and has Silver and Air
    if ( connected && session && hasSilver && hasAir && !hasGold && !hasPlatinum) {
      return (
        <div>
          <div>
          <h1>You have the Silver and Air NFTs</h1>
          <button onClick={() => grantSilverRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Silver role!"}
            </button>
          <button onClick={() => grantAirRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Air role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }


    // 1. (ix) The user is signed into Discord and connected to wallet and has Silver, Gold, Platinum and Air
    if ( connected && session && hasGold && hasPlatinum && !hasSilver && !hasAir) {
      return (
        <div>
          <div>
          <h1>You have the  Gold and Platinum NFTs</h1>
            <button onClick={() => grantGoldRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Gold role!"}
            </button>
            <button onClick={() => grantPlatinumRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Platinum role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }


    // 1. (x) The user is signed into Discord and connected to wallet and has Gold and Air
    if ( connected && session && hasGold && hasAir && !hasSilver && !hasPlatinum) {
      return (
        <div>
          <div>
          <h1>You have the Gold and Air NFTs</h1>
            <button onClick={() => grantGoldRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Gold role!"}
            </button>
          <button onClick={() => grantAirRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Air role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }


    // 1. (xi) The user is signed into Discord and connected to wallet and has Platinum and Air
    if ( connected && session && hasPlatinum && hasAir && !hasSilver && !hasGold) {
      return (
        <div>
          <div>
          <h1>You have the Platinum and Air NFTs</h1>
            <button onClick={() => grantPlatinumRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Platinum role!"}
            </button>
          <button onClick={() => grantAirRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Air role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }


    // 1. (xii) The user is signed into Discord and connected to wallet and has Silver, Gold and Air
    if ( connected && session && hasSilver && hasGold && hasAir && !hasPlatinum) {
      return (
        <div>
          <div>
          <h1>You have the Silver, Gold and Air NFTs</h1>
          <button onClick={() => grantSilverRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Silver role!"}
            </button>
            <button onClick={() => grantGoldRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Gold role!"}
            </button>
          <button onClick={() => grantAirRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Air role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }


    // 1. (xiii) The user is signed into Discord and connected to wallet and has Silver, Gold and Platinum
    if ( connected && session && hasSilver && hasGold && hasPlatinum && !hasAir) {
      return (
        <div>
          <div>
          <h1>You have the Silver, Gold and Platinum NFTs</h1>
          <button onClick={() => grantSilverRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Silver role!"}
            </button>
            <button onClick={() => grantGoldRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Gold role!"}
            </button>
            <button onClick={() => grantPlatinumRole()} disabled={disabled}>
              {loading ? "Please Wait..." : "Give me the Platinum role!"}
            </button>
            <a onClick={() => signOut()}>
              Sign out of Discord
            </a>
          </div>
        </div>
  
      );
    }




  // 2. Connect Wallet
  if (!connected ) {
    return (
      <div>
        
        <div> 
          <p> Get Access to our restricted contents by holding our NFT(s)</p>
        </div>
        <div>
        </div>
        <div>
          <button>
            GET MEMBERSHIP CNFT
          </button>
        </div>
        <div>
          <h1> You have our CNFT? Join Discord!</h1>
          <h2 >Discord Membership Access</h2>
          <CardanoWallet />
        </div>

      </div>
    );
  }

  // 3. Connect with Discord (OAuth)
  if (!session) {
    return (
      <div>
        <div>
          <h2 >Sign In with Discord</h2>
          <p>Sign In with Discord to check your eligibility for the NFT!</p>

          <button
            onClick={() => signIn("discord")}

          >
            Connect Discord
          </button>
        </div>

      </div>
    );
  }

  // 4. If connected and session and !haspolicyIdasset
  if (loading) {
    return (
     <div><h1>Loading...</h1></div>
    );
  }

  if  (connected && session && !hasGold && !hasSilver && !hasPlatinum && !hasAir) {
    return (
      <div>
        <div>
          <p> You don't have the required NFT</p>
          <button>
            GET MEMBERSHIP CNFT
          </button>
        </div>
      </div>

    );
  }


  return null;
}