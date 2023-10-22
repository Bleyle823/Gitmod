import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import * as PushAPI from '@pushprotocol/restapi';
import { ENV } from '@pushprotocol/restapi/src/lib/constants';
import { createSocketConnection, EVENTS } from "@pushprotocol/socket"


const SpaceCreationForm: React.FC = () => {
  const [spaceName, setSpaceName] = useState('');
  const [spaceDescription, setSpaceDescription] = useState('');
  const [listeners, setListeners] = useState<string>('');
  const [spaceImage, setSpaceImage] = useState<string>('');
  const [speakers, setSpeakers] = useState<string>('');
  const [pgpDecryptedPvtKey, setPgpDecryptedPvtKey] = useState<string>('');
  const [guildId, setGuildId] = useState('');
  const [guildRoleId, setGuildRoleId] = useState('');
  const [contract, setContract] = useState('');
  const [amount, setAmount] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [scheduleAt, setScheduleAt] = useState('');
  const [scheduleEnd, setScheduleEnd] = useState('');


  const env = ENV.DEV;
  const signer = ethers.Wallet.createRandom();
  // Replace 'ENV.DEV' with your desired environment


  const handleCreateSpace = async () => {
    try {
      const user = await PushAPI.user.get({
        account: 'eip155:0xFe6C8E9e25f7bcF374412c5C81B2578aC473C0F7',
        env,
      });

      const pgpDecryptedPvtKey = await PushAPI.chat.decryptPGPKey({
        encryptedPvtKey: user.encryptedPvtKey,
        signer,
        env,
      });

      const response = await PushAPI.space.create({
        spaceName,
        spaceDescription,
        listeners: listeners.split(',').map((listener) => listener.trim()),
        spaceImage,
        speakers: speakers.split(',').map((speaker) => speaker.trim()),
        rules: {
          spaceAccess: {
            conditions: [
              {
                any: [
                  {
                    type: 'PUSH',
                    category: 'ERC20',
                    subcategory: 'holder',
                    data: {
                      contract,
                      amount,
                      decimals: 18,
                    },
                  },
                  {
                    type: 'GUILD',
                    category: 'guildRoles',
                    subcategory: 'specificRole',
                    data: {
                      guildId,
                      guildRoleId,
                    },
                  },
                ],
              },
            ],
          },
        },
        isPublic,
        account: '0xD993eb61B8843439A23741C0A3b5138763aE11a4',
        env,
        pgpPrivateKey: pgpDecryptedPvtKey,
        scheduleAt: new Date(scheduleAt),
        scheduleEnd: new Date(scheduleEnd),
      });

      console.log('Space created:', response);
    } catch (error) {
      console.error('Space creation failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Space Creation</h1>
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-4">
          <label htmlFor="spaceName">Space Name</label>
          <input
            type="text"
            id="spaceName"
            value={spaceName}
            onChange={(e) => setSpaceName(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="spaceDescription">Space Description</label>
          <input
            type="text"
            id="spaceDescription"
            value={spaceDescription}
            onChange={(e) => setSpaceDescription(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="listeners">Listeners (Comma-separated addresses)</label>
          <input
            type="text"
            id="listeners"
            value={listeners}
            onChange={(e) => setListeners(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="spaceImage">Space Image</label>
          <input
            type="text"
            id="spaceImage"
            value={spaceImage}
            onChange={(e) => setSpaceImage(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="speakers">Speakers (Comma-separated addresses)</label>
          <input
            type="text"
            id="speakers"
            value={speakers}
            onChange={(e) => setSpeakers(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="contract">Contract Address</label>
          <input
            type="text"
            id="contract"
            value={contract}
            onChange={(e) => setContract(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="guildId">Guild ID</label>
          <input
            type="text"
            id="guildId"
            value={guildId}
            onChange={(e) => setGuildId(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="guildRoleId">Guild Role ID</label>
          <input
            type="text"
            id="guildRoleId"
            value={guildRoleId}
            onChange={(e) => setGuildRoleId(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="isPublic">Is Public</label>
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="scheduleAt">Schedule Start</label>
          <input
            type="datetime-local"
            id="scheduleAt"
            value={scheduleAt}
            onChange={(e) => setScheduleAt(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="scheduleEnd">Schedule End</label>
          <input
            type="datetime-local"
            id="scheduleEnd"
            value={scheduleEnd}
            onChange={(e) => setScheduleEnd(e.target.value)}
            className="w-64 h-10 border rounded-lg p-2"
          />
        </div>
        <div>
          <button
            onClick={handleCreateSpace}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Create Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpaceCreationForm;