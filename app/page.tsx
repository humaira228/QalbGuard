"use client";

import React from "react";
import { RiFlashlightLine } from "react-icons/ri"
import { PiStudentDuotone } from "react-icons/pi";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdPsychology } from "react-icons/md";
import { PiWaveSineBold } from "react-icons/pi";
import { FaChalkboardTeacher,  FaCode, FaTools } from 'react-icons/fa';
import { RiHeartPulseLine } from "react-icons/ri";
import { LuWaves, LuHand } from "react-icons/lu";

import { MdOutlineVisibilityOff } from "react-icons/md";

import Head from "next/head";
import {
  FaHeartbeat, FaHandHoldingHeart,FaBrain,FaGift, FaLaptopCode,FaPrint,FaPrayingHands,FaCoffee, FaYoutube,FaMobileAlt,FaCalendarDay,FaBookOpen, FaBook, FaPray, FaUsers,
  FaCalendarAlt, FaHandshake, FaChartLine, FaMosque,
  FaUserFriends, FaHistory
} from "react-icons/fa";
import { GiSpiralBottle, GiHealing, GiThink } from "react-icons/gi";
import { IoMdMoon } from "react-icons/io";

export default function Presentation() {
  const slideWrapperStyle = {
    pageBreakAfter: "always",
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#00171F",
    color: "#A0F0FF",
    fontFamily: "'Segoe UI', sans-serif",
    overflow: "hidden",
  };

  const Header = ({ title }: { title: string }) => (
    <div className="absolute top-8 left-10 text-cyan-300 text-xl font-semibold uppercase tracking-widest flex items-center gap-3">
      <div className="w-8 h-0.5 bg-cyan-500 rounded"></div>
      {title}
    </div>
  );

  const Footer = ({ page }: { page: number }) => (
    <div className="absolute bottom-6 right-10 text-cyan-600 text-xs font-medium tracking-wide">
      <span className="text-base text-cyan-500">
  <span className="font-semibold">Lote Tree</span> | Seerah Fest 1446 | {page.toString().padStart(2, '0')}
</span>

    </div>
  );

  const QuranVerse = ({ text, ref }: { text: string; ref: string }) => (
    <div className="bg-cyan-900/70 p-6 rounded-xl border-l-4 border-cyan-500 italic shadow-lg">
      <p className="text-cyan-100 text-2xl font-light leading-relaxed">{text}</p>
      <div className="text-right mt-2 text-cyan-400 text-sm font-mono">{ref}</div>
    </div>
  );

  
  const slideData = [
    {
  page: 1,
  title: "Addiction: From Sadr to Qalb",
  content: (
    <div className="w-full h-full p-16 flex flex-col items-center justify-center text-center relative fade-in">
      <FaHeartbeat className="text-7xl text-cyan-400 mb-8 mx-auto animate-pulse drop-shadow-lg" />
      
      <h1 className="text-7xl font-extrabold mb-6 tracking-wide
                     bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent
                     drop-shadow-md">
        Addiction: From Sadr to Qalb
      </h1>
      
      <p className="text-3xl text-cyan-300 font-light max-w-3xl leading-relaxed mb-12
                    tracking-wide">
        When Hearts Lose Their Compass
      </p>
      
      <blockquote className="px-8 py-4 border-l-4 border-cyan-500
                            text-cyan-300 text-xl italic max-w-xl
                            bg-cyan-900 bg-opacity-30 rounded-lg shadow-lg
                            drop-shadow-md mb-12">
        "Allah intervenes between a person and their heart" <br /> 
        <span className="font-semibold">(Qur'an 8:24)</span>
      </blockquote>

      {/* Team Members */}
      <div className="text-cyan-200 text-lg max-w-xl space-y-2">
        <h2 className="text-cyan-300 text-2xl font-semibold mb-4">Team Members</h2>
        <p><strong>Mst. Humaira Khanam</strong> - ID: 220041228</p>
        <p><strong>Atia Zaman</strong> - ID: 220041241</p>
        
      </div>
    </div>
  )
}

,
    
{
  page: 2,
  title: "Spiritual Enslavement",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Spiritual Enslavement" />
      <div className="grid grid-cols-[60%_40%] gap-12 h-full items-center">
        {/* Left: Textual Argument */}
        <div className="space-y-10">
          <QuranVerse
            text="Have you seen the one who takes their own desires as god? Then who will guide him after Allah?"
            ref="Qur'an 45:23"
            className="text-cyan-300 text-4xl leading-relaxed"
          />

          <div className="text-cyan-100 text-2xl italic leading-relaxed">
            <p>When we obey our urges uncritically,</p>
            <p>our souls are no longer free — they're hijacked.</p>
          </div>

          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700">
            <h3 className="text-cyan-400 text-3xl mb-4">Modern Chains</h3>
            <ul className="space-y-4 text-cyan-200 text-xl leading-relaxed">
              <li className="flex items-center gap-3">
                <FaBrain className="text-cyan-500 text-2xl" />
                4.7h/day screen time — dopamine saturation
              </li>
              <li className="flex items-center gap-3">
                <GiSpiralBottle className="text-cyan-500 text-2xl" />
                68% relapse rates — escape becomes addiction
              </li>
              <li className="flex items-center gap-3">
                <MdOutlineVisibilityOff className="text-cyan-500 text-2xl" />
                Fitrah blinded — can't see divine signs
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Visual and Takeaway */}
        <div className="bg-gradient-to-b from-cyan-900/40 to-emerald-900/30 rounded-2xl p-8 h-4/5 flex items-center justify-center shadow-lg">
          <div className="text-center space-y-4">
            <div className="text-6xl text-cyan-400 font-bold">→</div>
            <p className="text-cyan-200 text-3xl font-semibold leading-relaxed">
              From Instant Gratification<br />
              To Lasting Purification
            </p>
            <p className="text-cyan-400 text-xl font-mono leading-relaxed">
              The first hijrah is not geographic —<br />
              it's from nafs to nur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

,
   {
  page: 3,
  title: "The States of the Soul",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="The States of the Soul" />
      <div className="grid grid-cols-[60%_40%] gap-12 h-full items-center">

        {/* Left Section: 3 Types of Nafs */}
        <div className="space-y-8">
          <div className="bg-black/70 p-6 rounded-xl border-l-4 border-cyan-500 shadow-lg">
            <h3 className="text-cyan-300 text-3xl mb-4 font-serif">Three States of Nafs</h3>
            <div className="space-y-4 text-cyan-200 text-xl leading-relaxed">
              <p><strong>Nafs al-Ammārah</strong> — The commanding soul that inclines towards evil (Qur'an 12:53)</p>
              <p><strong>Nafs al-Lawwāmah</strong> — The self-reproaching soul aware of its faults (Qur'an 75:2)</p>
              <p><strong>Nafs al-Muṭma'innah</strong> — The tranquil soul, content and at peace (Qur'an 89:27-30)</p>
            </div>
          </div>
          <QuranVerse
            text={
              <>
                And [by] the soul and He who proportioned it, <br />
                And inspired it [with discernment of] its wickedness and its righteousness, <br />
                He has succeeded who purifies it...
              </>
            }
            ref="Qur'an 91:7-10"
            className="text-cyan-300 text-xl leading-relaxed"
          />
        </div>

        {/* Right Section: Icon and Hadith */}
        <div className="bg-gradient-to-b from-cyan-900/40 to-emerald-900/30 rounded-2xl p-8 h-4/5 flex flex-col items-center justify-center shadow-lg text-center space-y-6">
          <FaBook className="text-cyan-400 text-[9rem]" />
          <p className="text-cyan-200 text-3xl italic leading-snug font-light">
            "The heart of a believer lies between two fingers of the Merciful."
            <br />
            <span className="text-cyan-400 text-lg">(Sahih Muslim)</span>
          </p>
        </div>

      </div>
    </div>
  )
}

,









{
  page: 4,
  title: "Systemic Challenges",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Systemic Challenges" />
      <div className="grid grid-cols-[60%_40%] gap-12 h-full items-center">

        {/* Left Section: Text */}
        <div className="space-y-8">
          <div className="bg-black/70 p-6 rounded-xl border-l-4 border-cyan-500 shadow-lg">
            <h3 className="text-cyan-300 text-xl mb-4 font-serif flex items-center gap-3">
              <RiFlashlightLine className="text-cyan-400 text-2xl" />
              Modern Triggers
            </h3>
            <div className="space-y-6 text-cyan-200 text-lg leading-relaxed">
              
              <div>
                <p className="text-cyan-300 text-xl">
                  <strong className="text-2xl text-cyan-300">Algorithmic addiction engines:</strong><br />
                  Social media and digital platforms use algorithms designed to keep users hooked, exploiting psychological triggers to promote addictive behavior.
                </p>
              </div>

              <div>
                <p className="text-cyan-300 text-xl">
                  <strong className="text-2xl text-cyan-300">Normalization of sin through media:</strong><br />
                  Media often portrays sinful or unethical behaviors as normal or acceptable, which leads to desensitization and erosion of moral values.
                </p>
              </div>

              <div>
                <p className="text-cyan-300 text-xl">
                  <strong className="text-2xl text-cyan-300">Spiritual mentorship gap:</strong><br />
                  A lack of accessible and consistent spiritual guidance leaves individuals vulnerable to negative influences and moral confusion.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section: Hadith */}
        <div className="bg-gradient-to-b from-cyan-900/40 to-emerald-900/30 rounded-2xl p-8 h-4/5 flex items-center justify-center shadow-lg">
          <p className="text-cyan-200 text-3xl italic leading-snug font-light text-center">
            "The worst of matters are those that are newly invented"<br />
            <span className="text-cyan-400 text-base">(Sahih Muslim 867)</span>
          </p>
        </div>

      </div>
    </div>
  )
}
,





{
  page: 5,
  title: "Prophetic Framework",
  content: (
    <div className="p-16 relative h-full fade-in ">
      <Header title="Prophetic Framework" />
      <div className="grid grid-cols-[60%_40%] gap-12 h-full items-center">

        {/* Left panel: Three Phase Recovery */}
        <div className="space-y-10 bg-black/70 p-8 rounded-xl border-l-4 border-cyan-500 shadow-lg">
          <h3 className="text-cyan-300 text-3xl mb-8 font-semibold">Three Phase Recovery</h3>

          {/* Phase 1 */}
          <div className="flex gap-8 items-start">
            <div className="text-cyan-400 text-3xl font-extrabold">1</div>
            <div>
              <h4 className="text-2xl mb-2 font-semibold">Diagnosis</h4>
              <p className="text-cyan-400 text-xl">Identify the entry points of waswās</p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="flex gap-8 items-start">
            <div className="text-cyan-400 text-3xl font-extrabold">2</div>
            <div>
              <h4 className="text-2xl mb-2 font-semibold">Detox</h4>
              <p className="text-cyan-400 text-xl">Isolate triggers • build resistance</p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="flex gap-8 items-start">
            <div className="text-cyan-400 text-3xl font-extrabold">3</div>
            <div>
              <h4 className="text-2xl mb-2 font-semibold">Depth</h4>
              <p className="text-cyan-400 text-xl">Return to dhikr and muraqabah</p>
            </div>
          </div>
        </div>

        {/* Right panel: Quote and icon */}
        <div className="bg-gradient-to-b from-cyan-900/40 to-emerald-900/30 rounded-2xl p-8 h-4/5 flex flex-col items-center justify-center shadow-lg">
          <GiHealing className="text-cyan-400 text-[12rem] mb-6 opacity-80 animate-pulse" />
          <p className="text-center text-cyan-200 text-3xl italic">
            "Allah sent down the disease and the cure"
            <br />
            <span className="text-cyan-400 text-xl">(Bukhari 5678)</span>
          </p>
        </div>

      </div>
    </div>
  )
},

    // New Slide 6: Anatomy of Addiction


{
  page: 6,
  title: "Qur'anic Psychology",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Qur'anic Psychology" />
      <div className="grid grid-cols-[60%_40%] gap-12 h-full items-center">

        {/* Left Section: Text */}
        <div className="space-y-8">
          <div className="bg-black/70 p-6 rounded-xl border-l-4 border-cyan-500 shadow-lg">
            <h3 className="text-cyan-300 text-2xl mb-4 font-serif">The Spiritual Anatomy</h3>
            <div className="space-y-4 text-cyan-200">
              {[{
                number: "1",
                title: "Ṣadr (Chest)",
                desc: "Gateway for waswās (Q 114:4-5)"
              }, {
                number: "2",
                title: "Qalb (Heart)",
                desc: "Battleground of faith (Q 16:106)"
              }, {
                number: "3",
                title: "Fu'ād (Core Heart)",
                desc: "Source of spiritual vision (Q 53:11)"
              }].map(({ number, title, desc }) => (
                <div className="flex items-center gap-4" key={number}>
                  <div className="w-8 h-8 bg-cyan-900 rounded-full flex items-center justify-center font-semibold">
                    {number}
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="text-xl text-cyan-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <QuranVerse 
            text="And We have already created man and know what his soul whispers..." 
            ref="Qur'an 50:16" 
          />
        </div>

       {/* Right Section: Icon and Hadith */}
<div className="bg-gradient-to-b from-cyan-900/40 to-emerald-900/30 rounded-2xl p-8 h-4/5 flex flex-col items-center justify-center text-center shadow-lg space-y-6">
  <MdPsychology className="text-cyan-400 text-[12rem] opacity-80 animate-pulse" />
  <p className="text-cyan-200 text-3xl italic leading-relaxed max-w-md">
    "For there is no greater enemy for human beings than their own desires and what their tongues reap."
    <br />
    <span className="text-cyan-400 text-xl">(al-Kāfī, Vol. 2, p. 336)</span>
  </p>
</div>



      </div>
    </div>
  )
},



    // New Slide 7: Case Study
   {
  page: 7,
  title: "Reclamation Journey",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Reclamation Journey" />
      <div className="grid grid-cols-[60%_40%] gap-12 h-full items-center">

        {/* Left Panel: Journey Steps */}
        <div className="bg-black/70 p-8 rounded-xl border border-cyan-700 shadow-lg">
          <h3 className="text-2xl font-serif text-cyan-300 mb-6">From Darkness to Light: A Soul's Turning Point</h3>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="text-cyan-400 pt-1 text-xl font-bold">➊</div>
              <div>
                <p className="text-2xl text-cyan-200 font-semibold">The Trial</p>
                <p className="text-xl text-cyan-400 mt-1">A profound personal loss challenged faith and resilience</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-cyan-400 pt-1 text-xl font-bold">➋</div>
              <div>
                <p className="text-2xl text-cyan-200 font-semibold">The Struggle</p>
                <p className="text-xl text-cyan-400 mt-1">Entrapped in cycles of escape, deepening spiritual disconnection</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-cyan-400 pt-1 text-xl font-bold">➌</div>
              <div>
                <p className="text-2xl text-cyan-200 font-semibold">The Awakening</p>
                <p className="text-xl text-cyan-400 mt-1">For indeed, with hardship comes ease” (Surah Ash-Sharh 94:5-6) — a divine reminder rekindling hope and strength</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Impact Stats */}
<div className="bg-gradient-to-t from-cyan-900/40 to-emerald-900/30 rounded-2xl p-8 h-4/5 flex flex-col justify-center items-center shadow-lg">
  <div className="text-center space-y-10">

    <div>
      <div className="text-cyan-300 text-4xl font-extrabold">83%</div>
      <p className="text-cyan-200 text-3xl mt-2">Average cortisol reduction</p>
      <p className="text-cyan-400 text-2xl italic mt-1">
        After reduced digital overstimulation.
      </p>
    </div>

    <div className="h-px bg-cyan-700 w-1/2 mx-auto"></div>

    <div>
      <div className="text-cyan-300 text-4xl font-extrabold">40 Days</div>
      <p className="text-cyan-200 text-3xl mt-2">To restore emotional balance</p>
      <p className="text-cyan-400 text-2xl italic mt-1">
        Based on neuroscience research.
      </p>
    </div>

    <p className="text-xl text-cyan-400 text-sm mt-6 italic">
      Source: Journal of Health Psychology, 2016.
    </p>

  </div>
</div>
</div>

     
    </div>
  )
},


    // New Slide 8: Community Support
   {
  page: 8,
  title: "Ummah Immunity",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Ummah Immunity" />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-4xl text-center">
          <QuranVerse
            text="And hold firmly to the rope of Allah all together and do not become divided..."
            ref="Qur'an 3:103"
          />
          <p className="text-cyan-300 italic mt-4 mb-12 max-w-xl mx-auto text-xl">
            Strengthening the qalb through collective faith and brotherhood is our shield against spiritual vulnerabilities.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center">
              <FaUserFriends className="text-5xl text-cyan-400 mb-4" />
              <h4 className="text-cyan-200 mb-3 font-semibold text-2xl">QalbGuard Brotherhood</h4>
              <p className="text-xl text-cyan-400 text-center max-w-xs">
                Gender-segregated mentor circles fostering trust, muraqabah, and consistent support.
              </p>
            </div>
            <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center">
              <FaPray className="text-5xl text-cyan-400 mb-4" />
              <h4 className="text-cyan-200 mb-3 font-semibold text-2xl">Collective Dhikr & Du'a</h4>
              <p className="text-xl text-cyan-400 text-center max-w-xs">
                Weekly healing circles anchored in Qur'an and Sunnah to nurture qalb resilience.
              </p>
            </div>
            <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center">
              <FaHistory className="text-5xl text-cyan-400 mb-4" />
              <h4 className="text-cyan-200 mb-3 font-semibold text-2xl">40-Day Accountability Cycle</h4>
              <p className="text-xl text-cyan-400 text-center max-w-xs">
                Peer monitoring system to build consistency, muraqabah, and spiritual discipline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


,

    // New Slide 9: Daily Practices
    {
  page: 9,
  title: "Heart Maintenance",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Heart Maintenance" />
      <div className="grid grid-cols-2 gap-12 h-full items-center">

        {/* Left Section: Practices */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-emerald-900/40 rounded-2xl p-8 shadow-lg space-y-6 text-lg">
          <h3 className="text-center text-2xl text-cyan-300 font-semibold mb-4">
            Guarding the Qalb
          </h3>

          <div className="space-y-5">
            {[
              {
                icon: "📔",
                title: "Journaling & Self-Observation",
                desc: "Recognize emotions without being ruled by them.",
              },
              {
                icon: "🕯️",
                title: "Mind & Memory Awareness",
                desc: "Use spaced repetition to rewire the heart with Qur'an.",
              },
              {
                icon: "🕋",
                title: "Replace False Heroes",
                desc: "Let the Prophet ﷺ become your model, not media idols.",
              },
              {
                icon: "⏳",
                title: "Patience with the Haqq",
                desc: "Truth may seem plain at first—but it is eternal.",
              },
              {
                icon: "🕌",
                title: "Daily Spiritual Routine",
                desc: "Reflect after Fajr & Maghrib • End day with muḥāsabah.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <div>
                  <p className="text-cyan-200 font-semibold text-xl">{title}</p>
                  <p className="text-cyan-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Icon + Verse */}
        <div className="bg-black/60 p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center space-y-6">
          <HiOutlineSparkles className="text-[6rem] text-cyan-400 animate-pulse" />
          <QuranVerse
            text="Indeed, in the remembrance of Allah do hearts find rest."
            ref="Qur'an 13:28"
            className="text-xl text-cyan-200"
          />
          <p className="text-cyan-400 text-xl italic">
            “The strong is the one who controls himself when angry.” <br /> (Bukhari)
          </p>
        </div>
      </div>
    </div>
  )
}


,
{
  page: 10,
  title: "Building Freedom: System & Support",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Building Freedom: System & Support" />
      <div className="max-w-6xl mx-auto text-xl text-cyan-200 space-y-10">

        <QuranVerse
          text="And do not follow the footsteps of Satan. Indeed, he is to you a clear enemy."
          ref="Qur'an 2:168-169"
        />

        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center text-center">
            <FaBookOpen className="text-5xl text-cyan-400 mb-4" />
            <h4 className="text-cyan-200 font-semibold mb-2">Islamic Education</h4>
            <p className="text-cyan-400 text-xl">Replacing harmful content with Quran & Sunnah knowledge</p>
          </div>

          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center text-center">
            <FaHeartbeat className="text-5xl text-cyan-400 mb-4" />
            <h4 className="text-cyan-200 font-semibold mb-2">Halal Lifestyle</h4>
            <p className="text-cyan-400 text-xl">From food to media, medicine to jobs—free from the system of oppression</p>
          </div>

          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center text-center">
            <FaUsers className="text-5xl text-cyan-400 mb-4" />
            <h4 className="text-cyan-200 font-semibold mb-2">Community Support</h4>
            <p className="text-cyan-400 text-xl">Peer accountability with rotating check-ins and mentorship</p>
          </div>

          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center text-center">
            <FaYoutube className="text-5xl text-cyan-400 mb-4" />
            <h4 className="text-cyan-200 font-semibold mb-2">Own Media Platforms</h4>
            <p className="text-cyan-400 text-xl">Creating authentic Muslim content to counter mainstream narratives</p>
          </div>

          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center text-center">
            <FaCalendarDay className="text-5xl text-cyan-400 mb-4" />
            <h4 className="text-cyan-200 font-semibold mb-2">Muslims' Day</h4>
            <p className="text-cyan-400 text-xl">Regular community events focused on spirituality & growth</p>
          </div>

          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex flex-col items-center text-center">
            <FaMobileAlt className="text-5xl text-cyan-400 mb-4" />
            <h4 className="text-cyan-200 font-semibold mb-2">Daily Arabic & Qur'an</h4>
            <p className="text-cyan-400 text-xl">One ayah memorization, iPray & Al-Hadith app use to build habit</p>
          </div>
        </div>

      </div>
    </div>
  )
}


,

{
  page: 11,
  title: "Project Budget",
  content: (
    <div className="p-16 relative h-full fade-in">
      <Header title="Project Budget" />
      <div className="max-w-4xl mx-auto text-cyan-200">
        <p className="mb-8 text-center text-lg">
          Estimated costs for the 17,000 BDT IUT 3-month pilot program
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Workshop Materials */}
          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex items-start gap-4">
            <FaBook className="text-4xl text-cyan-400 mt-1" />
            <div>
              <p className="font-semibold text-xl">Workshop Materials</p>
              <p className="text-xl text-cyan-400">Printed guides, handouts, and presentation resources</p>
              <p className="mt-2 font-semibold">3,000 BDT</p>
            </div>
          </div>

          {/* Curriculum Development */}
          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex items-start gap-4">
            <PiStudentDuotone className="text-4xl text-cyan-400 mt-1" />
            <div>
              <p className="font-semibold text-xl">Curriculum Development</p>
              <p className="text-xl text-cyan-400">Life-based, spiritually grounded modules (Shariah, media, health, employment)</p>
              <p className="mt-2 font-semibold">5,000 BDT</p>
            </div>
          </div>

          {/* Refreshments */}
          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex items-start gap-4">
            <FaCoffee className="text-4xl text-cyan-400 mt-1" />
            <div>
              <p className="font-semibold text-xl">Refreshments</p>
              <p className="text-xl text-cyan-400">Light snacks & drinks during sessions and events</p>
              <p className="mt-2 font-semibold">1,500 BDT</p>
            </div>
          </div>

          {/* Mentorship Incentives */}
          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex items-start gap-4">
            <FaHandHoldingHeart className="text-4xl text-cyan-400 mt-1" />
            <div>
              <p className="font-semibold text-xl">Mentorship Incentives</p>
              <p className="text-xl text-cyan-400">Tokens for student mentors and du’aat</p>
              <p className="mt-2 font-semibold">3,000 BDT</p>
            </div>
          </div>

          {/* MVP App Upgrade */}
          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex items-start gap-4">
            <FaLaptopCode className="text-4xl text-cyan-400 mt-1" />
            <div>
              <p className="font-semibold text-xl">MVP App Upgrade</p>
              <p className="text-xl text-cyan-400">Improve existing community-built alternatives</p>
              <p className="mt-2 font-semibold">5,000 BDT</p>
            </div>
          </div>

          {/* Competition Rewards & Others */}
          <div className="bg-black/70 p-6 rounded-xl border border-cyan-700 shadow-lg flex items-start gap-4">
            <FaGift className="text-4xl text-cyan-400 mt-1" />
            <div>
              <p className="font-semibold text-xl">Competition Rewards & Others</p>
              <p className="text-xl text-cyan-400">Prizes, logistics, and flexibility buffer</p>
              <p className="mt-2 font-semibold">3,000 BDT</p>
            </div>
          </div>
        </div>

        {/* Total Budget */}
        <hr className="my-10 border-cyan-700" />
        <p className="text-center font-bold text-cyan-300 text-2xl">
          
        </p>
      </div>
    </div>
  )
}
,


{
  page: 12,
  title: "The Heart That Remembers & Feels Wisely",
  content: (
    <div className="p-16 relative h-full fade-in">
      <div className="grid grid-cols-2 gap-12 h-full items-center">
        {/* Left Section */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-emerald-900/40 rounded-2xl p-8 h-full flex flex-col justify-center shadow-lg">
          <h3 className="text-cyan-200 text-3xl mb-8 font-semibold text-center">
            Emotional Intelligence & Heartful Living
          </h3>
          <ul className="list-none space-y-8 text-cyan-300 text-lg">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center text-cyan-400 text-2xl">
                <PiWaveSineBold />
              </div>
              <div>
                <strong className="text-xl">Control the Emotional Wave:</strong><p className="text-xl"> Feel, but don't follow emotions blindly.</p>
                <br />
               
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center text-cyan-400 text-2xl">
                <LuHand />
              </div>
              <div>
                <strong className="text-xl">Weep in Sajdah, not for Ego:</strong><p className="text-xl"> Let your heart melt in front of Allah — not your desires.</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center text-cyan-400 text-2xl">
                <RiHeartPulseLine />
              </div>
              <div>
                <strong className="text-xl">Live the legacy:</strong><p className="text-xl"> The Prophet ﷺ felt deeply — but channeled emotions through du'a, patience, and silent strength.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center p-8 bg-black/60 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-cyan-200 mb-6">
            The Heart That Remembers
          </h2>
          <div className="bg-cyan-900/40 p-6 rounded-xl border border-cyan-700 w-full">
            <p className="text-cyan-300 text-xl mb-2">
              "Take one step towards Me, I take ten towards you"
            </p>
            <p className="text-cyan-400 text-base">(Hadith Qudsi)</p>
          </div>
          <p className="mt-6 text-cyan-300 text-lg italic">
            “Grieve not over what escaped you...”
            <br />
            <span className="text-cyan-400 text-base">
              (Surah Al-Hadid 57:23)
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

  ];

  return (
    <>
      <Head>
        <title>Addiction: From Ṣadr to Qalb | Seerah Fest 1446</title>
        <style>{`
          @media print {
            @page {
              size: A4 landscape;
              margin: 0;
            }
            body, section, div {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              background: #00171F !important;
              color: #A0F0FF !important;
            }
          }
          body {
            margin: 0;
            background: #00171F;
          }
          .print-black {
            background: #00171F !important;
          }
          .fade-in {
            animation: fadeInSlide 1.5s ease forwards;
            opacity: 0;
          }
          @keyframes fadeInSlide {
            to { opacity: 1; }
          }
        `}</style>
      </Head>

      {slideData.map(({ page, title, content }) => (
        <section key={page} style={slideWrapperStyle} className="print-black">
          {content}
          <Footer page={page} />
        </section>
      ))}
    </>
  );
}