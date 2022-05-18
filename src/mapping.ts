import { BigInt } from "@graphprotocol/graph-ts"
import {
  MasterChefV2,
  Deposit,
  FreeFeeUser,
  Harvest,
  Init,
  Lock,
  NewAdmin,
  NewBoostContract,
  NewBoostWeight,
  NewDurationFactor,
  NewDurationFactorOverdue,
  NewMaxLockDuration,
  NewOperator,
  NewOverdueFee,
  NewPerformanceFee,
  NewPerformanceFeeContract,
  NewTreasury,
  NewUnlockFreeDuration,
  NewVCakeContract,
  NewWithdrawFee,
  NewWithdrawFeeContract,
  NewWithdrawFeePeriod,
  OwnershipTransferred,
  Pause,
  Paused,
  Unlock,
  Unpause,
  Unpaused,
  Withdraw
} from "../generated/MasterChefV2/MasterChefV2"
import { CakeLock } from "../generated/schema"

export function handleDeposit(event: Deposit): void {}

export function handleFreeFeeUser(event: FreeFeeUser): void {}

export function handleHarvest(event: Harvest): void {}

export function handleInit(event: Init): void {}

export function handleLock(event: Lock): void {
  let entity = CakeLock.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new CakeLock(event.transaction.from.toHex())
  }

  entity.sender = event.params.sender
  entity.lockedAmount = event.params.lockedAmount
  entity.lockedDuration = event.params.lockedDuration
  entity.blockTimestamp = event.params.blockTimestamp
  entity.shares = event.params.shares
  entity.save()
}

export function handleNewAdmin(event: NewAdmin): void {}

export function handleNewBoostContract(event: NewBoostContract): void {}

export function handleNewBoostWeight(event: NewBoostWeight): void {}

export function handleNewDurationFactor(event: NewDurationFactor): void {}

export function handleNewDurationFactorOverdue(
  event: NewDurationFactorOverdue
): void {}

export function handleNewMaxLockDuration(event: NewMaxLockDuration): void {}

export function handleNewOperator(event: NewOperator): void {}

export function handleNewOverdueFee(event: NewOverdueFee): void {}

export function handleNewPerformanceFee(event: NewPerformanceFee): void {}

export function handleNewPerformanceFeeContract(
  event: NewPerformanceFeeContract
): void {}

export function handleNewTreasury(event: NewTreasury): void {}

export function handleNewUnlockFreeDuration(
  event: NewUnlockFreeDuration
): void {}

export function handleNewVCakeContract(event: NewVCakeContract): void {}

export function handleNewWithdrawFee(event: NewWithdrawFee): void {}

export function handleNewWithdrawFeeContract(
  event: NewWithdrawFeeContract
): void {}

export function handleNewWithdrawFeePeriod(event: NewWithdrawFeePeriod): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePause(event: Pause): void {}

export function handlePaused(event: Paused): void {}

export function handleUnlock(event: Unlock): void {}

export function handleUnpause(event: Unpause): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleWithdraw(event: Withdraw): void {}
