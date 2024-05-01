"use client"
import React from 'react';
import { useRouter } from 'next/navigation';  // Impor dari next/navigation
import './page.css';

const PremiumPage = () => {
    const router = useRouter();

    // Fungsi untuk menangani navigasi ke halaman detail paket Individual
    const handleIndividualClick = () => {
        // Navigasi ke halaman detail paket
        router.push('/page2');
    };

    return (
        <div className="freemium-container">
            <div className="freemium-freemium">
                <div className="freemium-group10">
                    <div className="freemium-frame34">
                        <div className="freemium-frame9">
                            <span className="freemium-text">
                                <span>Yuk, lanjutkan dengan berlangganan!</span>
                            </span>
                            <span className="freemium-text02">
                                <span>Untuk membuka jumlah kuis tanpa batas, pilih paket yang Anda inginkan!</span>
                            </span>
                        </div>
                        <div className="freemium-frame33" onClick={handleIndividualClick}>
                            <div className="freemium-frame16">
                                <div className="freemium-frame15">
                                    <span className="freemium-text04">
                                        <span>Individual</span>
                                    </span>
                                    <div className="freemium-frame12">
                                        <div className="freemium-frame10">
                                            <div className="freemium-group4">
                                                <img
                                                    src="/path/to/your/checkmark-icon.png" // Ganti dengan path icon yang sesuai
                                                    alt="Checkmark"
                                                    className="freemium-ellipse4"
                                                />
                                                <span className="freemium-text06">✓</span>
                                            </div>
                                            <span className="freemium-text07">
                                                <span>Berlangganan secara independen</span>
                                            </span>
                                        </div>
                                        <div className="freemium-frame11">
                                            <div className="freemium-group5">
                                                <img
                                                    src="/path/to/your/checkmark-icon.png" // Ganti dengan path icon yang sesuai
                                                    alt="Checkmark"
                                                    className="freemium-ellipse3"
                                                />
                                                <span className="freemium-text09">✓</span>
                                            </div>
                                            <span className="freemium-text10">
                                                <span>Scan dan kuis tanpa batas</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="freemium-frame14">
                                        <div className="freemium-frame13">
                                            <span className="freemium-text12">
                                                <span>30k</span>
                                            </span>
                                            <span className="freemium-text14">
                                                <span>/bulan per orang</span>
                                            </span>
                                        </div>
                                        <span className="freemium-text16">
                                            <span>Diskon 10% untuk paket tahunan</span>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* Tampilan untuk paket lain, jika ada, tapi tidak interaktif */}
                        <div className="freemium-frame33">
                            <div className="freemium-frame24">
                                <div className="freemium-frame22">
                                    <span className="freemium-text18">
                                        <span>Group</span>
                                    </span>
                                    <div className="freemium-frame21">
                                        <div className="freemium-frame17">
                                            <div className="freemium-group6">
                                                <img
                                                    src="/path/to/your/checkmark-icon.png" // Pastikan path ini benar
                                                    alt="Checkmark"
                                                    className="freemium-ellipse5"
                                                />
                                                <span className="freemium-text20">✓</span>
                                            </div>
                                            <span className="freemium-text21">
                                                <span>Konten bersama untuk kelompok belajar hingga 5 pengguna</span>
                                            </span>
                                        </div>
                                        <div className="freemium-frame18">
                                            <div className="freemium-group7">
                                                <img
                                                    src="/path/to/your/checkmark-icon.png" // Pastikan path ini benar
                                                    alt="Checkmark"
                                                    className="freemium-ellipse6"
                                                />
                                                <span className="freemium-text23">✓</span>
                                            </div>
                                            <span className="freemium-text24">
                                                <span>Scan dan kuis tanpa batas</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="freemium-frame20">
                                        <div className="freemium-frame19">
                                            <span className="freemium-text26">
                                                <span>25k</span>
                                            </span>
                                            <span className="freemium-text28">
                                                <span>/bulan per orang</span>
                                            </span>
                                        </div>
                                        <span className="freemium-text30">
                                            <span>(125k/bulan)</span>
                                        </span>
                                        <span className="freemium-text32">
                                            <span>Diskon 10% untuk paket tahunan</span>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="freemium-frame33">
                            <div className="freemium-frame32">
                                <div className="freemium-frame31">
                                    <span className="freemium-text34">
                                        <span>Institution</span>
                                    </span>
                                    <div className="freemium-frame30">
                                        <div className="freemium-frame25">
                                            <div className="freemium-group8">
                                                <img
                                                    src="/path/to/your/checkmark-icon.png" // Ganti dengan path yang sesuai
                                                    alt="Checkmark"
                                                    className="freemium-ellipse7"
                                                />
                                                <span className="freemium-text36">✓</span>
                                            </div>
                                            <span className="freemium-text37">
                                                <span>Banyak pengguna dalam satu institusi</span>
                                            </span>
                                        </div>
                                        <div className="freemium-frame26">
                                            <div className="freemium-group9">
                                                <img
                                                    src="/path/to/your/checkmark-icon.png" // Ganti dengan path yang sesuai
                                                    alt="Checkmark"
                                                    className="freemium-ellipse8"
                                                />
                                                <span className="freemium-text39">✓</span>
                                            </div>
                                            <span className="freemium-text40">
                                                <span>Scan dan kuis tanpa batas</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="freemium-frame28">
                                        <div className="freemium-frame27">
                                            <span className="freemium-text42">
                                                <span>27k</span>
                                            </span>
                                            <span className="freemium-text44">
                                                <span>/bulan per orang</span>
                                            </span>
                                        </div>
                                        <span className="freemium-text46">
                                            <span>Hubungi kami untuk detail lebih lanjut</span>
                                        </span>
                                        <span className="freemium-text48">
                                            <span>Diskon 10% untuk paket tahunan</span>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumPage;
