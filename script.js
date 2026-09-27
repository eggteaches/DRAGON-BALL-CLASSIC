document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LINKS DO GOOGLE DRIVE DOS VÍDEOS ---
   const pathsPersonalizados = [
         "https://drive.google.com/file/d/1sKkB6Wbs7NN2FVR3NgZuTBNAwgX3MRMz/preview",
         "https://drive.google.com/file/d/14Zoq1eHY79xKYRVhdiJApaFlTmizoGbO/preview",
         "https://drive.google.com/file/d/13-HTw-Ny8O94zQq1h33kpKXy2oAGat0Y/preview",
         "https://drive.google.com/file/d/11x8sWr4X6zJKTMMyqy2HIl1l6Rrl0by6/preview",
         "https://drive.google.com/file/d/1_rydJ3XmQWxeZ5_3ISCxmZpDFxIkeRpo/preview",
         "https://drive.google.com/file/d/14UclVMCEnbDHkIvubHvlP2zXUM-_K9-A/preview",
         "https://drive.google.com/file/d/1GK_8zZhbCQMx2ivmX2G1PRxaiD9E8tuV/preview",
         "https://drive.google.com/file/d/1hmilQAcyCA3ry5A8ffA_pocgzJulO_SY/preview",
         "https://drive.google.com/file/d/1Ow6TEkQm5TYHnTVEkWvAthudzU6tyQNy/preview",
         "https://drive.google.com/file/d/1poP60WXSYcbUHS0mqNoDdvpSOEjPv4hf/preview",
         "https://drive.google.com/file/d/1DK_DS4h5CJtPzLtz1Bjk7XXG9vUDSLxZ/preview",
         "https://drive.google.com/file/d/1IgE6t2PT5LTlAaWGEBIZwEgKmqFBVp7x/preview",
         "https://drive.google.com/file/d/14sSukDSVRTpeLIx6Fw9ltTJOJfj_FZrn/preview",
         "https://drive.google.com/file/d/1SPiT9XLUFSCc-_-AE-v2m_2jeGrS8taK/preview",
         "https://drive.google.com/file/d/1HSj4Gd5NSvMN5xL0JprfdIJwJivq1vWR/preview",
         "https://drive.google.com/file/d/1Y-DUr5b24eIwXx1b_TVw4qmq8PsxSQ4s/preview",
         "https://drive.google.com/file/d/1qp7NVcV2_rz6tvi9zUknqKUiLuQ6C3VL/preview",
         "https://drive.google.com/file/d/1uGtchVLWDpPW1a5o8otkj_MaviALo2Uj/preview",
         "https://drive.google.com/file/d/16tQJk1bQQiEQOkOdDVn-fCV4O6bV4QQ2/preview",
         "https://drive.google.com/file/d/1YlQIULdouN8Kq7TdZOD08wzCCu7j0tcm/preview",
         "https://drive.google.com/file/d/1HLayKYZYsOgpOyDj4k0ExTiabO_rSNYB/preview",
         "https://drive.google.com/file/d/1eCUMs52azD-YeGuiOiY--x9gnxHJtUdy/preview",
         "https://drive.google.com/file/d/1s7K_sKXhqxEisFREC1cNIXcEUiMcvL7c/preview",
         "https://drive.google.com/file/d/1eTNycKT1N7V8lnXFZONenloP3UlrR1uZ/preview",
         "https://drive.google.com/file/d/1FjD8WyJJzNkQ2Uj9cV6uQ5D-RKXLH7Ld/preview",
         "https://drive.google.com/file/d/1E8aaKk9fC_5YT2GNpgrLIouWNfoKGnwS/preview",
         "https://drive.google.com/file/d/1OoyMPjcUmiC4RYzXCeu50CroLtEow3zZ/preview",
         "https://drive.google.com/file/d/18uk9mZJZqbCDaOTKwrs_xR9zXWfo-59Y/preview",
         "https://drive.google.com/file/d/13-MyzV5nupZ_Z59EnNtde8MYDR7i6fuY/preview",
         "https://drive.google.com/file/d/1DkFvtrRtR3ZeUHnZ7vSopiUYVBLnobdu/preview",
         "https://drive.google.com/file/d/1CLAXl2q_nh45LISlm01dJ1tnDqEyqLuw/preview",
         "https://drive.google.com/file/d/18guaXF8mg8o2Brbpv7NaQyjBIhVhLZgl/preview",
         "https://drive.google.com/file/d/1_62-Odia8LnErZoXb1wzQ74roQYoMv70/preview",
         "https://drive.google.com/file/d/19JTr9KW2L5bAC3KUUOtyH3Fsq4_t4KOd/preview",
         "https://drive.google.com/file/d/1RUISgpm28VlilxrCF26w3d45bZA32XIw/preview",
         "https://drive.google.com/file/d/1HMwrzAp5x7fjaBz7Y4DPMr6MnUy56bPe/preview",
         "https://drive.google.com/file/d/1772BXbq_YIyguzO8iS1sxFImLJoAQDZA/preview",
         "https://drive.google.com/file/d/1jjUVCBeLzpQkXVkCQN_3oZM7Gj_FHRCG/preview",
         "https://drive.google.com/file/d/1nJtL-O8XPIbUwKXGiMcg_BdCY52vbmlC/preview",
         "https://drive.google.com/file/d/1COqUbORyQr2IwV39auel3048NzGS1hNc/preview",
         "https://drive.google.com/file/d/1g33K2EmeIyEMHaC9GWJfGyPMEBfK7Kyr/preview",
         "https://drive.google.com/file/d/1CEJDpnCLJ_7ZMHDGdHD3LJYlzDRYaHwu/preview",
         "https://drive.google.com/file/d/1dIVFDGFZCE4umW37DZtzXoPcF5nfYZiQ/preview",
         "https://drive.google.com/file/d/1ZUldW9hn5cAXyX-gm8gEllRjSjzwp_ba/preview",
         "https://drive.google.com/file/d/1PKFYanUcadPtjgpWUYTso1rctvRTqBXp/preview",
         "https://drive.google.com/file/d/1BzVOlh8W0COYeWlupUMoUcfltjeyoinH/preview",
         "https://drive.google.com/file/d/19-PZv9lKbXooydsZq8ZJNIqLuCno6-8K/preview",
         "https://drive.google.com/file/d/19kCKlpWTOBUyZo7ysYLcodxbmSC5CmCu/preview",
         "https://drive.google.com/file/d/108SJRp8-0hay6DYE-oz6UUF7IfP02Qi6/preview",
         "https://drive.google.com/file/d/1kFl4oeHmBFwrrshbtPSmKTVdy8nLRfEH/preview",
         "https://drive.google.com/file/d/1whzFVRqO8g5_u_zEpgNX1BV9CT6WhrQX/preview",
         "https://drive.google.com/file/d/1G9O6QmZF71VKcoSn-WpFxqcZDKAS0ySW/preview",
         "https://drive.google.com/file/d/1VaEnivB8mVpx2Oj-Sel-hdthLprrV3Q0/preview",
         "https://drive.google.com/file/d/1qvez4o5cvVFXoV2se6husel9LtdDaZr9/preview",
         "https://drive.google.com/file/d/1aQxu0_AfX8QsdcU_bP7xf0Y6oo3DMYeh/preview",
         "https://drive.google.com/file/d/1GzYovTqLDv4g-CT8dlWP3p2mJXwQVej3/preview",
         "https://drive.google.com/file/d/1qqxY8AyJdUrQpUNJqbbG_0tpXZVb0mG8/preview",
         "https://drive.google.com/file/d/1-eCIscEPI1FMeyLRD4z9-iDdnvh9P48E/preview",
         "https://drive.google.com/file/d/1pn9CjAnw5fFNH6iz1XRJKYZCj0wDFaUY/preview",
         "https://drive.google.com/file/d/1LZV34-uHs58mDmjb4FElVkTydlchUhdB/preview",
         "https://drive.google.com/file/d/118GblKK-fVMkWZAZAnstuP8p4L2m0s6z/preview",
         "https://drive.google.com/file/d/1HSfTS5PgQP38sBoFabhtAziStKxmBXG7/preview",
         "https://drive.google.com/file/d/1AMXA3z89f3IEljkeqgePjV94aPE541Ax/preview",
         "https://drive.google.com/file/d/1s6jeJQstf0zXXDZyIkvrYedKsptLBrGM/preview",
         "https://drive.google.com/file/d/118i4aXgieGhkjOVxkjbpqUfN2noPU4GN/preview",
         "https://drive.google.com/file/d/1ZPOxePSrgn7cfgJuqaQRzRcxDhvmh20h/preview",
         "https://drive.google.com/file/d/19qknNbRVCEYhE-G1h1bVR_cz8DyjkvdI/preview",
         "https://drive.google.com/file/d/1ayeOxzi91tXt_qLwvHaQ_K0oa9-BT6JE/preview",
         "https://drive.google.com/file/d/19QQ2tMSytF4INMhHiQNyY51ivmG-eJcP/preview",
         "https://drive.google.com/file/d/1wXismT5d-zQiITRKTcopVY9ypS1lPVW0/preview",
         "https://drive.google.com/file/d/1pMcYrdjImihFXMGjT-w_TyM8LeU_Io8v/preview",
         "https://drive.google.com/file/d/1KFI0tmzSNW2uZe5Uu-gRJVl8VYc7Iurn/preview",
         "https://drive.google.com/file/d/1mUOOL1tCGtHQh2FkC1Cg8K4iwUhAU1VB/preview",
         "https://drive.google.com/file/d/1j5sQdGi1Js0M5r-yf3XW8fRMYdfBn82N/preview",
         "https://drive.google.com/file/d/12yemm7BYq0vU_X8LTRLwdCr_nYp_LMYB/preview",
         "https://drive.google.com/file/d/1VmypeEL6F7kpS3-MQGaARvTzmzTxEXE3/preview",
         "https://drive.google.com/file/d/14qXEQ8wEeBC9OFbXchddnJBPTHGZTx60/preview",
         "https://drive.google.com/file/d/1THOlF9xyMf7ulcwBWgwiD8gn9_7McVkP/preview",
         "https://drive.google.com/file/d/130F6X2-f1vYR0c6e6fzwlSDsDu6HzuKL/preview",
         "https://drive.google.com/file/d/1AlYCdDe1RgTeZUkmuJLBMkIEKEYLOLZQ/preview",
         "https://drive.google.com/file/d/1Z4khyePQZ6PvSQp-ckcupmOyckz47g4V/preview",
         "https://drive.google.com/file/d/1DvyM4aECAd3MIBsF33rkKinRv4Pz4eCh/preview",
         "https://drive.google.com/file/d/1ZjpLkYjqiAYJ9GjQtxiVFdlP-c4N7Zhs/preview",
         "https://drive.google.com/file/d/1-B4xm5_thK4G-D0L7njew5MKgG2RmmKY/preview",
         "https://drive.google.com/file/d/1wBbP1h22U6CHPsaw6HgO5SwFFQ3iS8Ba/preview",
         "https://drive.google.com/file/d/1uD5X9xO-qaYnblpuzM8wvKKpXNtsy0Js/preview",
         "https://drive.google.com/file/d/1ieMRDiDibSeJM-FEIkDcwBdQqTw-psmE/preview",
         "https://drive.google.com/file/d/1mYURDKuSJL1whNIYm6Wxacb_KuDliWcc/preview",
         "https://drive.google.com/file/d/1cEIIdBszhmB2LkyqchpNJCTMkw6vTnii/preview",
         "https://drive.google.com/file/d/1j-L4dFFIjir37n4fqxYA6SPITcA3SJYS/preview",
         "https://drive.google.com/file/d/1SGqvOJP4f_-4hWQbFJiAOu2LOD3YHMIB/preview",
         "https://drive.google.com/file/d/1SenQv19jGe-4AuaVHIrrSLDv0CXv_uOG/preview",
         "https://drive.google.com/file/d/1D_q9t2NXKMOEznKLYTvcN3ysNbtwmhmE/preview",
         "https://drive.google.com/file/d/1w5m6YbY_YlD7x7lX0Mw6FyhS2iIMLl3V/preview",
         "https://drive.google.com/file/d/1lGldNlSu_MEahPE_8wGZ60NgNdh69Jzp/preview",
         "https://drive.google.com/file/d/1Dz5HovcqIyajWaZQESS0MfwCgDzThyU7/preview",
         "https://drive.google.com/file/d/14uFG8k1SUIOWeQSS-iD8lnheoR7AjSie/preview",
         "https://drive.google.com/file/d/1PcSa5oXeaRKMzndg0pdkFexbrNMBSzEg/preview",
         "https://drive.google.com/file/d/1zzG2MAWSR57PMfZa8Q0IeXN-kjyJA-wh/preview",
         "https://drive.google.com/file/d/1gwK9K186dUnWo2DdMLpx5qrZMSO0MqkM/preview",
         "https://drive.google.com/file/d/1lyYVsFKAZyCSodG3D58bD30uwyJr07Q2/preview",
         "https://drive.google.com/file/d/1P1mI85SNwahPmOE20Y3faIRfUB1tNRlf/preview",
         "https://drive.google.com/file/d/1JSt31J7Tbw-tgH5qrn39iF7yWcs1T3qo/preview",
         "https://drive.google.com/file/d/1AAfHLiYx81dbY9eTuh68bCwWeXtq99IP/preview",
         "https://drive.google.com/file/d/1ag3CfVeTo7mBFyukYdHpOdi_sX4Fepua/preview",
         "https://drive.google.com/file/d/1sihsiJiOse6_-E-C1udobfNWgevUrl_W/preview",
         "https://drive.google.com/file/d/1IQp7Xf85hiDLNRnfV2k4e4XswjSsBQPT/preview",
         "https://drive.google.com/file/d/1T9u03nClnDjjccVGwe6jQctCOvDFRueI/preview",
         "https://drive.google.com/file/d/1if4LwDwj2CLu3e5eg_n6qeuLVZPYO0ul/preview",
         "https://drive.google.com/file/d/1ViF7kX_9UCcU30JBvCVLp5c9J_i0UAwQ/preview",
         "https://drive.google.com/file/d/10OyjfzqphSvNcJeguwTQrvK4lYcDhFXy/preview",
         "https://drive.google.com/file/d/1p9sQoTTuKIAc557zEmt2b2V_jayFR5Ba/preview",
         "https://drive.google.com/file/d/1WBmT2LGClDOAIlUsiU9aK6gfaPd8cK7c/preview",
         "https://drive.google.com/file/d/1pCqhGWKsQ0RQEvQliro8Ql3yL6tblS0J/preview",
         "https://drive.google.com/file/d/17BufkU5rK_dKS6pFFwDcyXL5vpGGy2tM/preview",
         "https://drive.google.com/file/d/1oLJZRm9Nn6d5RXBAzS1cn-FlMvrxJw14/preview",
         "https://drive.google.com/file/d/1oLJZRm9Nn6d5RXBAzS1cn-FlMvrxJw14/preview",
         "https://drive.google.com/file/d/1B6XxLRokHn_B0N1Y3lxmNh717yyGThrn/preview",
         "https://drive.google.com/file/d/1tvzVE9YP4VSnv5pXS4dJH-OcAD1sUPCj/preview",
         "https://drive.google.com/file/d/14Sx8xrXNhIJobFgMGzqotTzkD8rBL5j_/preview",
         "https://drive.google.com/file/d/1ylido21sHMqMIOBSLO1gmrRD9zC-pe9d/preview",
         "https://drive.google.com/file/d/1z_PrtMTYh1WZH1Kae3M6Ums0vG7vpW_r/preview",
         "https://drive.google.com/file/d/1fM06heXHCIZPznAAwMy2F5whhspUpDel/preview",
         "https://drive.google.com/file/d/1miySgatywxINzGquRLBwWsQtluzHAAK4/preview",
         "https://drive.google.com/file/d/1BgYPQgSUVsyYwpEzUiasiAW6yihLg8IV/preview",
         "https://drive.google.com/file/d/1LxpQNO7xJ59nbvDAgAbvZAgabEihYtBH/preview",
         "https://drive.google.com/file/d/1CW6Df7HaasJP56LkrSC0Ztq9X2a9STSz/preview",
         "https://drive.google.com/file/d/1jPzsJZOPw9SxqCJdJD9eT2EZZhW0ru4v/preview",
         "https://drive.google.com/file/d/1qAkdMPE3mqEav0_BXP4WsQ5pXMUcsqjo/preview",
         "https://drive.google.com/file/d/1nL9EEF-ZMSmGo6GiI5e3Td7Rsgqq92eN/preview",
         "https://drive.google.com/file/d/1fIeGfyvGGc69O7BvFNfzOw4C_ncaLTVn/preview",
         "https://drive.google.com/file/d/1YEW0v5gaw9O3OAVVg_Zsq10VjtMQXP2u/preview",
         "https://drive.google.com/file/d/1IuqvZQz0xEia9HarS_QclsoKAWsHDXOY/preview",
         "https://drive.google.com/file/d/19_Z2BnWin2epdfY4QMT7M7UCX4hnK0vP/preview",
         "https://drive.google.com/file/d/17eRRCYDrS8rDun5FzgOy9vO_pb83TYAo/preview",
         "https://drive.google.com/file/d/1XPRbcRgV1YszSd0sE_aBd1VbtAkohU6T/preview",
         "https://drive.google.com/file/d/1-l2H4Procg-7Ma4YVtmy9awAHq_xrOv4/preview",
         "https://drive.google.com/file/d/19HwYhN-HNsKL8K19wJ_9SJ0ekbiecryP/preview",
         "https://drive.google.com/file/d/1Vnuv1Q6uxAHyadZjQWQVwfc51GIzPE2Q/preview",
         "https://drive.google.com/file/d/1XiNO9_CDQ0Ud9cP97lRcot2Xc57TxNxQ/preview",
         "https://drive.google.com/file/d/1jdw7pc8R4XU6u-jwlOYwu6w-lD2Szvox/preview",
         "https://drive.google.com/file/d/1_Nm40AkDp9QiE5fONDh5gqWwH9JeBXrl/preview",
         "https://drive.google.com/file/d/1hfvfgrIp7chzOQ4-L9X2ZmIB-eI6P5R3/preview",
         "https://drive.google.com/file/d/1AkNXha_7S5yz16lC_95CtqiRkb6EH9lV/preview",
         "https://drive.google.com/file/d/13rSScg_Yfvpv001WENV_B4F2ub__q05f/preview",
         "https://drive.google.com/file/d/1nEvuWbxhdsZ9dAhOzpIoK1N2ceKZHIiu/preview",
         "https://drive.google.com/file/d/1nsvbwTb7Uxwy845lRyUfA1F50530Txc6/preview",
         "https://drive.google.com/file/d/1rhQVuAhLM_jiQRivNQn3r2wgnfP6NOiD/preview",
         "https://drive.google.com/file/d/1GATwEz4TAXIT6wUF_5yaxWBr_y_wcpee/preview",
         "https://drive.google.com/file/d/1kUSv71WL3jtO70I_ytfMqpra33zu6usR/preview",
         "https://drive.google.com/file/d/1cwrYl0q5lQAn-wHi8Yl3gycZMHVWhVhB/preview",
         "https://drive.google.com/file/d/1uebjHxgfHhHwmwgkmZtGEr6lKBo4RJIU/preview",
         "https://drive.google.com/file/d/1GEyUbNaCtZEczuUsmCDpI9LcykfZD7pE/preview",
    ];

    // --- 2. LINKS DAS IMAGENS (THUMBNAILS) ---
    // Coloque os links das imagens aqui na mesma ordem dos episódios.
    // Se deixar em branco "", o código usará a imagem da Esfera do Dragão automaticamente.
    const thumbnailsPersonalizadas = [
        "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png", 
         "Goku.png", 
          "Goku.png", 
        "Goku.png", 
          "Goku.png", 
        "Goku.png"
    ];

    const TOTAL_EPISODIOS = 153;
    const episodios = [];

    // Gerador da lista completa
    for (let i = 1; i <= TOTAL_EPISODIOS; i++) {
        episodios.push({
            numero: i,
            titulo: `Episódio ${i}`,
            path: pathsPersonalizados[i - 1] || "",
            // Pega a imagem da lista, se não existir, usa a Esfera
            thumb: thumbnailsPersonalizadas[i - 1] || "Ball_2.png" 
        });
    }

    // --- VARIÁVEIS DE CONTROLE ---
    const episodiosPorPagina = 30;
    let paginaAtual = 1;
    let episodioAtualAssistindo = null;

    // --- ELEMENTOS DO DOM ---
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    const viewHome = document.getElementById('home-view');
    const viewPlayer = document.getElementById('player-view');
    const gridEpisodios = document.getElementById('episode-grid');
    const paginationContainer = document.getElementById('pagination');
    
    const btnBack = document.getElementById('btn-back');
    const videoPlayer = document.getElementById('video-player');
    const titlePlayer = document.getElementById('current-episode-title');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    const btnStartEp1 = document.getElementById('btn-start-ep1');
    const btnScrollList = document.getElementById('btn-scroll-list');

    // --- LÓGICA DE CARREGAMENTO (LOADING) ---
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            renderizarGrade();
            renderizarPaginacao();
        }, 500);
    }, 1500); 

    // --- FUNÇÕES DA GRADE E PAGINAÇÃO ---
    function renderizarGrade() {
        gridEpisodios.innerHTML = "";
        
        const indexInicio = (paginaAtual - 1) * episodiosPorPagina;
        const indexFim = indexInicio + episodiosPorPagina;
        const episodiosDaPagina = episodios.slice(indexInicio, indexFim);

        episodiosDaPagina.forEach(ep => {
            const card = document.createElement('div');
            card.className = 'episode-card';
            
            // Define qual classe de CSS usar dependendo se é a Esfera ou uma Thumbnail real
            const imageClass = ep.thumb === "Ball_2.png" ? "card-bg-icon" : "card-thumb-img";

            card.innerHTML = `
                <img src="${ep.thumb}" class="${imageClass}" alt="Thumbnail do Episódio">
                <div class="card-info">
                    <h4>${ep.titulo}</h4>
                </div>
            `;
            card.addEventListener('click', () => abrirPlayer(ep.numero));
            gridEpisodios.appendChild(card);
        });
    }

    function renderizarPaginacao() {
        paginationContainer.innerHTML = "";
        const totalPaginas = Math.ceil(TOTAL_EPISODIOS / episodiosPorPagina);

        for (let i = 1; i <= totalPaginas; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === paginaAtual ? 'active' : ''}`;
            btn.innerText = i;
            btn.addEventListener('click', () => {
                paginaAtual = i;
                renderizarGrade();
                renderizarPaginacao();
                document.getElementById('episode-list-section').scrollIntoView({ behavior: 'smooth' });
            });
            paginationContainer.appendChild(btn);
        }
    }

   // --- FUNÇÕES DO PLAYER DE VÍDEO ---
    function abrirPlayer(numeroEpisodio) {
        episodioAtualAssistindo = numeroEpisodio;
        const epDados = episodios[numeroEpisodio - 1]; 

        titlePlayer.innerText = epDados.titulo;
        
        if(epDados.path === "") {
            alert("O link de vídeo deste episódio ainda não foi adicionado.");
            return;
        }

        videoPlayer.src = epDados.path;

        viewHome.classList.add('hidden');
        viewPlayer.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'auto' });

        atualizarBotoesNavegacao();
    }

    function fecharPlayer() {
        videoPlayer.src = ""; 
        viewPlayer.classList.add('hidden');
        viewHome.classList.remove('hidden');
        document.getElementById('episode-list-section').scrollIntoView({ behavior: 'smooth' });
    }

    function atualizarBotoesNavegacao() {
        btnPrev.disabled = episodioAtualAssistindo === 1;
        btnNext.disabled = episodioAtualAssistindo === TOTAL_EPISODIOS;
    }

    // --- EVENTOS DOS BOTÕES ---
    btnStartEp1.addEventListener('click', () => abrirPlayer(1));
    btnScrollList.addEventListener('click', () => {
        document.getElementById('episode-list-section').scrollIntoView({ behavior: 'smooth' });
    });

    btnBack.addEventListener('click', fecharPlayer);
    btnPrev.addEventListener('click', () => {
        if (episodioAtualAssistindo > 1) abrirPlayer(episodioAtualAssistindo - 1);
    });
    btnNext.addEventListener('click', () => {
        if (episodioAtualAssistindo < TOTAL_EPISODIOS) abrirPlayer(episodioAtualAssistindo + 1);
    });
});