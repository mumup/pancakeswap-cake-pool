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
import { ExampleEntity } from "../generated/schema"

export function handleDeposit(event: Deposit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BOOST_WEIGHT(...)
  // - contract.BOOST_WEIGHT_LIMIT(...)
  // - contract.DURATION_FACTOR(...)
  // - contract.DURATION_FACTOR_OVERDUE(...)
  // - contract.MAX_LOCK_DURATION(...)
  // - contract.MAX_LOCK_DURATION_LIMIT(...)
  // - contract.MAX_OVERDUE_FEE(...)
  // - contract.MAX_PERFORMANCE_FEE(...)
  // - contract.MAX_WITHDRAW_FEE(...)
  // - contract.MAX_WITHDRAW_FEE_PERIOD(...)
  // - contract.MIN_DEPOSIT_AMOUNT(...)
  // - contract.MIN_LOCK_DURATION(...)
  // - contract.MIN_WITHDRAW_AMOUNT(...)
  // - contract.PRECISION_FACTOR(...)
  // - contract.PRECISION_FACTOR_SHARE(...)
  // - contract.UNLOCK_FREE_DURATION(...)
  // - contract.VCake(...)
  // - contract.admin(...)
  // - contract.available(...)
  // - contract.balanceOf(...)
  // - contract.boostContract(...)
  // - contract.cakePoolPID(...)
  // - contract.calculateOverdueFee(...)
  // - contract.calculatePerformanceFee(...)
  // - contract.calculateTotalPendingCakeRewards(...)
  // - contract.calculateWithdrawFee(...)
  // - contract.freeOverdueFeeUsers(...)
  // - contract.freePerformanceFeeUsers(...)
  // - contract.freeWithdrawFeeUsers(...)
  // - contract.getPricePerFullShare(...)
  // - contract.masterchefV2(...)
  // - contract.operator(...)
  // - contract.overdueFee(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.performanceFee(...)
  // - contract.performanceFeeContract(...)
  // - contract.token(...)
  // - contract.totalBoostDebt(...)
  // - contract.totalLockedAmount(...)
  // - contract.totalShares(...)
  // - contract.treasury(...)
  // - contract.userInfo(...)
  // - contract.withdrawFee(...)
  // - contract.withdrawFeeContract(...)
  // - contract.withdrawFeePeriod(...)
}

export function handleFreeFeeUser(event: FreeFeeUser): void {}

export function handleHarvest(event: Harvest): void {}

export function handleInit(event: Init): void {}

export function handleLock(event: Lock): void {}

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
