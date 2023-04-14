import React from "react";
import { FaAddressBook, FaHouseDamage } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import { RxValueNone } from "react-icons/rx";
import { CgTemplate } from "react-icons/cg";
import { TbDoor } from "react-icons/tb";
import { AiFillControl } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { TbRecycle } from "react-icons/tb";

export default function FactorsEffectingBer() {
  return (
    <div className='bg-light text-dark '>
      <div className='cont py-24'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[var(--text-color)] uppercase rounded-full bg-acchov1'>
              The basics
            </p>
          <h4 className='max-w-lg mb-4 h2 md:mx-auto'>
            Factors Affecting a BER
          </h4>
          <p className='p1 text-dark/60'>
            The rating a property receives can be affected by various factors,
            including:
          </p>
        </div>
        <div className='grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x lg:divide-neutral-500'>
          <div className='space-y-6 sm:px-16'>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>
                  Age of construction
                </h5>
                <p className='p3 text-dark/75'>
                  The age of a building can affect its insulation, ventilation,
                  and heating system, making it important for energy efficiency
                  assessments.
                </p>
              </div>
            </div>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>Floor area</h5>
                <p className='p3 text-dark/75'>
                  The size of a building impacts its energy consumption, and the
                  larger the floor area, the more energy it may consume.
                </p>
              </div>
            </div>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>
                  Default values
                </h5>
                <p className='p3 text-dark/75'>
                  Default values provide a standardised approach to calculating
                  energy efficiency and rating in cases where no information is
                  available.
                </p>
              </div>
            </div>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>
                  Thermal insulation
                </h5>
                <p className='p3 text-dark/75'>
                  Proper insulation helps to reduce heat loss, keeping the
                  property warm and energy-efficient.
                </p>
              </div>
            </div>
          </div>
          <div className='space-y-6 sm:px-16'>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>
                  Windows and doors
                </h5>
                <p className='p3 text-dark/75'>
                  Energy-efficient windows and doors reduce heat loss and
                  prevent draughts, improving a building&apos;s energy
                  efficiency.
                </p>
              </div>
            </div>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>
                  Heating systems and controls
                </h5>
                <p className='p3 text-dark/75'>
                  Efficient heating systems and controls help to reduce energy
                  consumption and improve energy efficiency.
                </p>
              </div>
            </div>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>
                  Light fittings
                </h5>
                <p className='p3 text-dark/75'>
                  Energy-efficient light fittings can save on electricity bills
                  and reduce energy consumption.
                </p>
              </div>
            </div>
            <div className='flex flex-col max-w-md sm:flex-row'>
              <div>
                <h5 className='mb-3 h4'>Renewables</h5>
                <p className='p3 text-dark/75'>
                  Incorporating renewable energy sources, such as solar panels,
                  can help to reduce a building&apos;s reliance on non-renewable
                  energy sources and improve its energy rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
