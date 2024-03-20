/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","ccb199dbf9b20fa2d3c6bc5242474f16"],["/2019/01/02/Anconda常用命令总结/index.html","9624e4ff0649865905aec28bcd8eff78"],["/2019/01/02/句型/index.html","99b1abbc1ff08d2e2d71611fb30041b1"],["/2019/01/02/日语助词/index.html","21bba99971ac2794472d3a733b22b0b0"],["/2019/01/03/on-my-zsh/index.html","1a02856bc0d7d5663e66bb7c8c03b177"],["/2019/01/04/《当我遇见一个人》摘录/index.html","fc4a4875f6b6da422d69034391a1a1d2"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","f5086c60cee2e6ee27cc9733cc2da262"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","9c2b8328de7be4aacecba4c87a610220"],["/2019/01/04/经济学笔记/index.html","8c43d10ad21a60023dffa99059a6b761"],["/2019/01/04/语法总结（5-15）/index.html","a7346a2d780c92ac2b7a3783d93a2481"],["/2019/01/05/linux常用命令/index.html","bda2261b99e4e109058cf894e9983a9f"],["/2019/01/06/敬语/index.html","8c6f628ed27b609da2c0d3e17f566842"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","d827f5a6a0b1f4fbae3b706e43de922e"],["/2019/01/07/cuda 手动配置/index.html","76010ba2c15f7110bdacebcd93a81b3c"],["/2019/01/07/docker-ldap-mysql/index.html","9b2dd53b0ddd5f1443fa01563f5792ba"],["/2019/01/07/docker安装/index.html","66dafa66aefe4ee2b5319c344448cffa"],["/2019/01/07/docker容器挂载硬盘/index.html","0ccb561f141d8f415bc23db898ee2b30"],["/2019/01/07/github上传代码/index.html","6a50182406a363f5ca195d7a52530f67"],["/2019/01/07/kaldi 安装/index.html","491755c6d134df15a556a3643d744e68"],["/2019/01/07/linux常用工具/index.html","5e549efb0795746bff79b60e215ddf04"],["/2019/01/07/opencv/index.html","4d17c31373d6554a9f059a1858ddb304"],["/2019/01/07/ssh 远程连接docker/index.html","2b488c2eb0908c92ca2ed6b45fb8c596"],["/2019/01/07/导出/index.html","bf1a99a45f3159a0912ec383277490c6"],["/2019/01/07/换源/index.html","72237ae78f8d3af7c200ae82142da124"],["/2019/01/09/markdown/index.html","65ed7ad7ad03284c92fd4b8786db94ff"],["/2019/01/09/opencv图像美化/index.html","ec17ee24d7e30c51e2ec999f9e29d98b"],["/2019/01/11/19单元语法/index.html","480d0f108c0c01ea8d99e8b60fcd160e"],["/2019/01/11/20单元语法/index.html","1ce37ac1c11b5dda854fb151550cb32a"],["/2019/01/11/opencv-图片几何变换/index.html","f0dde264558aaa2aa4b6b7a2f5e3de3c"],["/2019/01/11/opencv-图片处理及绘图/index.html","c7807eb7152324b4519f214007daafb6"],["/2019/01/11/wine安装qq/index.html","ceaa3adfa075ad38610088e9c3e54185"],["/2019/01/12/tensorflow-可视化/index.html","0bd5c8c25efe1c20e11ee1d0a33585f8"],["/2019/01/12/tensorflow-基础语法/index.html","4f3f2b0b0573ec5b1c121aafcd18a172"],["/2019/01/13/RNN/index.html","0c6febae51888e4562c8b563bbf50425"],["/2019/01/13/keras实现CNN/index.html","39429c96464117b0cefc43345a9a2a8a"],["/2019/01/13/卷积神经网络实现/index.html","57db4b70427867ab2771176c118c26a2"],["/2019/01/13/循环神经网络RNN-写诗/index.html","bdaacb747e9bd811d0f47adb0806a2af"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","53d1d0fa7edec959db11f5d81b464cba"],["/2019/01/14/反向传播/index.html","a7b886a2d802569df50183ac210be56d"],["/2019/01/14/图床/index.html","ac20a72a3fd1ee069740c2fe9dc31fe6"],["/2019/01/14/感知器与激活函数/index.html","73963d1c13ac9d5a87465072db46a35b"],["/2019/01/15/PIL简单应用/index.html","be6efb9690f6a376fa841485897a1cf2"],["/2019/01/15/卷积神经网络理论/index.html","759c04517d1b5066be69d5b54d042f28"],["/2019/01/15/图片分类之pca-svc/index.html","69d155b0ccd87bdd318dbf1ba2847272"],["/2019/01/15/强化学习基础/index.html","c8d5ed36e7d5f9fec45dcefbcd469d32"],["/2019/01/15/经典神经网络/index.html","4fbe673008f17e4edaa272efd69efc97"],["/2019/01/16/DQN/index.html","7f6b39eaa41369aab9ace0f4fbeef5ea"],["/2019/01/16/TCP传输图片/index.html","439a968f3ac224bd019249de86f19aa3"],["/2019/01/16/时序差分学习/index.html","0c1537a645ce8635b8cde473787147e1"],["/2019/01/16/蒙特卡洛方法/index.html","6febb6cdb70eecd880cee5c7454af2f1"],["/2019/01/17/Double-QDN/index.html","317568a0af6c343726547f9714051065"],["/2019/01/17/RNN理论/index.html","ce7d2bb6357438b618d26ea433d9e949"],["/2019/01/17/梯度下降/index.html","4be4255a661dda6341a32543a9dacb81"],["/2019/01/18/PG和TD3/index.html","5e4c72648cb9784b874e878d6ee3c7ff"],["/2019/01/20/21单元语法/index.html","78c06ef2329adce0fa41e7f02f01887b"],["/2019/01/20/GAN理论/index.html","4e112138cf9093fb333a109ebdf75430"],["/2019/01/20/PG3和IRL/index.html","e1da733426b684814d9376b7cb764ba5"],["/2019/01/20/数据集/index.html","7196380e2c3f33404fb3b1bc5e8b0d27"],["/2019/01/21/DCGAN/index.html","9d553e3a672e1c577c812e1539509172"],["/2019/01/21/LSTM/index.html","428ecfc44a789e5b1acb782fcbc90a67"],["/2019/01/21/点击预估/index.html","466737d1d5a0c9d807b656a6d0428743"],["/2019/01/22/SVD分解/index.html","22775258d00418cba2e394d003efb7ae"],["/2019/01/22/SVM/index.html","b5efc728c33fa98c87be33fd9a7f0dbc"],["/2019/01/22/机器学习简介/index.html","c7c385fba6cb322fee45c29d0e679379"],["/2019/01/22/线性回归/index.html","c7b8c7480d2fe6e7e75421df3d0f2acb"],["/2019/01/22/逻辑回归/index.html","490fcdc10ff196f3c39a9945f3febc22"],["/2019/01/23/numpy/index.html","5c561aa1386eda03a63e6694caafeb8d"],["/2019/01/23/决策树与随机森林/index.html","ecda59d04ab7631d7c1ca2368543abec"],["/2019/01/23/聚类/index.html","4ae9866e44ac247222ccf627c3d2cfea"],["/2019/01/24/matplotlib/index.html","0c83f853da8777682cd440b2551a017f"],["/2019/01/25/pandas/index.html","23e7a744ca8e1507153d184570482abd"],["/2019/01/25/语义分割/index.html","8ccb951680ebfbd0b1b444a8c500f41b"],["/2019/01/27/22单元语法/index.html","94cc00cb37b1c03ae4c4e692f970e0f6"],["/2019/01/27/SVM案例/index.html","29ae44be9d9f69c45de39e9ae5db91c6"],["/2019/01/28/requests库及爬虫案例/index.html","11688a55d69fcb62ff67b2e4e4955069"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","dc0d3bb9c94b36471298eacb253e7e74"],["/2019/01/28/异常/index.html","8f548d1c2fd11d0986f64ba7927d3b58"],["/2019/01/28/描述器和装饰器/index.html","d566a5a7df6ca8709758b9a92968e1ad"],["/2019/01/28/文件/index.html","17fac3b93e8f660c3bb2f17e3904e971"],["/2019/01/28/正则/index.html","4b839db87ea69e15a633d7787dd2c2f3"],["/2019/01/29/函数基础和函数参数/index.html","61f82a87a2ada9af1d31bb3c26154592"],["/2019/01/29/多继承和魔方方法/index.html","90d006f2a1794f89a1800248b2c226cc"],["/2019/01/29/类定义、属性和继承/index.html","6d12f30049892fa686bc63f92949e9b5"],["/2019/02/27/23单元/index.html","31edcded2662595bdc9bf15d277c8470"],["/2019/03/12/hexo加速/index.html","c77858cee4ca7b807d25efbc712d34b7"],["/2019/03/12/hexo系统重装恢复/index.html","35a50de1cc550d61847dc4220678d737"],["/2019/03/13/24单元/index.html","199ae2f999292a29ae72612dd21fbe00"],["/2019/03/19/25单元/index.html","0b646d8ab566cd964d7b2239782e1401"],["/2019/03/26/26单元/index.html","7b910cf949775840ba3c08bc2cd4185d"],["/2019/04/14/27单元/index.html","bea67cb2b747d8c36676e77c0d5669ee"],["/2019/05/01/28单元/index.html","fd5250ab0d4d2ea7d5726b4419674181"],["/2019/05/02/29单元/index.html","5997e80f7bbf35e2d7789e247d9aeb3a"],["/2019/05/12/30单元/index.html","28151ff7019e52780df3934b3f7f9536"],["/2019/06/03/jni/index.html","ca1ff4429629f17081202e8261e4ece2"],["/2019/06/07/JNA/index.html","ced8b1f06de860a6d1d5fe7ca1867efb"],["/2022/08/07/R配置jupyter/index.html","71f5b080f917aa4c68856e6d2b1b7e83"],["/2022/08/18/FFmpeg常用命令/index.html","8d28e6a33aeeaa3270c05b6635605c81"],["/2022/08/18/linux系统代理/index.html","2dabd30fad70042fdb1d1e7ca6f605bf"],["/2022/08/18/matplotlib补充/index.html","46bb0944c28f864d8430c04ba6509925"],["/2022/08/18/常用命令/index.html","db1ffe04574f54591331ef31685effc9"],["/2022/08/20/sacred/index.html","f0e479b285f90e7d153dd18141cc1a15"],["/2022/08/20/wsl/index.html","9b62c1c9b7e673460e4c1931d44ae59b"],["/2022/08/20/双系统安装/index.html","f07c89aca6e280124a9994a149d9324a"],["/2023/06/28/source/index.html","b46211422d6a43cfe66789405bafa9ed"],["/archives/2018/12/index.html","74a0e72d8f06d032840d604573d09c5d"],["/archives/2018/index.html","3570340873fa37d694f886f4bff22bd8"],["/archives/2019/01/index.html","e9f87e461f72c70ce5b03c38439d379f"],["/archives/2019/01/page/2/index.html","d58508a9cad67548caa7472ee91c6c6f"],["/archives/2019/01/page/3/index.html","c28c6ae8528b951a9322beb797c4321e"],["/archives/2019/01/page/4/index.html","32beee50b6dc135a7c113e7c673f8ec4"],["/archives/2019/01/page/5/index.html","85b53deab42027ed3d6104981ab288d5"],["/archives/2019/01/page/6/index.html","b7a0eff6460b3815e919a3e816a17712"],["/archives/2019/01/page/7/index.html","945f626c35c8017275bd652d118ce4a6"],["/archives/2019/01/page/8/index.html","7c3507f428cff4b0e328f65a2fc41406"],["/archives/2019/01/page/9/index.html","410fba041270a64095d9ae9db74d110e"],["/archives/2019/02/index.html","38078c452497c08d3c498c8984be613e"],["/archives/2019/03/index.html","0862a60ed3b924a2bac49e387ba83175"],["/archives/2019/04/index.html","ac3455fdf70e9bb6e62d20428681b898"],["/archives/2019/05/index.html","e405695ed32dc8c3723b69dfc7425ad2"],["/archives/2019/06/index.html","2d86b089dee62bbe901c531ddcd4b03a"],["/archives/2019/index.html","93ac253b1b1915044cd51b30d34f8aab"],["/archives/2019/page/10/index.html","b7aea9af857ec92c8b4675705297574d"],["/archives/2019/page/2/index.html","36c09ac4d64243fe6bb94cc186a2c88a"],["/archives/2019/page/3/index.html","14b66417ec146f7aea7309b77fd5b51a"],["/archives/2019/page/4/index.html","66d90dc180ae75409470b5e4bc3945df"],["/archives/2019/page/5/index.html","a2e5dafb568ac0730320ea22165974d3"],["/archives/2019/page/6/index.html","5ac173976691b78991d5f466042f6a26"],["/archives/2019/page/7/index.html","30d1d1567262842b70c5cbb885938b98"],["/archives/2019/page/8/index.html","171fe8a1de92bfee2d645a6db402520b"],["/archives/2019/page/9/index.html","03f69d8a1753336a9fc4bcbde7c4c14d"],["/archives/2022/08/index.html","4e1ceae4cfbafc13233391acb08afed0"],["/archives/2022/index.html","de391bf2458085188e34155f32dfb148"],["/archives/2023/06/index.html","f35d246080017b2b751613906d6501d8"],["/archives/2023/index.html","3253e679eb73b022bbcbcbf19668b301"],["/archives/index.html","3b60de0cae0875a0f73bfddbabb56e16"],["/archives/page/10/index.html","7aa5d4078969d9c625bde4b72f217526"],["/archives/page/11/index.html","4e4ea4f60efc9e100b0db9e691b8017c"],["/archives/page/2/index.html","16b40e5e33d16b8fc8fe2571bd7abdb7"],["/archives/page/3/index.html","22e9901326ecfe0f1f805375e1aa2aae"],["/archives/page/4/index.html","e9d1ceaffe4d41197af7d558faa10a04"],["/archives/page/5/index.html","9108a5d1381e27b26d1d21dbaedf9a7f"],["/archives/page/6/index.html","22bda77548dff0dcb366961a755e6e7c"],["/archives/page/7/index.html","d66bf9df49333102951b142bee68ff1f"],["/archives/page/8/index.html","f7619fe0a7acbbf2660df74b4f4c9f86"],["/archives/page/9/index.html","961d030a41868461a57b52c2bc33d790"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","906d665985ad85c034efccbd72698eba"],["/categories/dxz/index.html","c3f6014314518a26c3958e9bc5709f9a"],["/categories/index.html","f0c657def5ce49761ad0d9a53938c119"],["/categories/java调用C/index.html","4a0ee4a11a2d458f5f11ce7215766aff"],["/categories/linux/index.html","a0daed58b665b71f3f5230971c973d47"],["/categories/linux/page/2/index.html","b5cd376617eb1da75cc60848b6402224"],["/categories/python/index.html","d1d1f17b84bb5c305423d6eef7b62e44"],["/categories/tensorflow/index.html","3667f0f5ae2688fa15e6f36d27956e5e"],["/categories/优化算法/index.html","8d706fdd11ee386e5e20f4278051de7e"],["/categories/图片分类/index.html","a2f586bb527f1955cb27bdb62fb92071"],["/categories/工具/index.html","99a1f94dd6d6fed1c61a3d90c796733e"],["/categories/工具/page/2/index.html","5fbb1a7fc45ea307f7c4c0076478e85f"],["/categories/强化学习/index.html","6f279789708b7c303f806c0a8f8e58f6"],["/categories/数据集/index.html","8cdc0dd8793399994825d0752c638242"],["/categories/日语/index.html","fa1d119751776a7d905d7f64646f6916"],["/categories/日语/page/2/index.html","c8ca504a80765d8174e61cacaf060e2b"],["/categories/机器学习/index.html","183f3843ec34028e9d70a229cb039809"],["/categories/深度学习/index.html","162559fd9b73566e981bbaa4df19219b"],["/categories/深度学习/page/2/index.html","cb29d7fcc60d42cdc337a6e73b4c56ce"],["/categories/计算机视觉/index.html","e0daf720867380269ce61b3e757cca28"],["/categories/读书笔记/index.html","50ba7a41b37a5466305cdcb3f2576a20"],["/css/main.css","4a91fa046ebe1b7a28e22c42f18da945"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8d40454b00b72c0879afddc7a9cc9c04"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","8321a0cc358031e64428330edd8bed5d"],["/page/11/index.html","3652ee257190cd25b29b457200954295"],["/page/2/index.html","66e4c3fcd44108640f1772688a5339bd"],["/page/3/index.html","8930417d351d302fe5a20028c2c356e2"],["/page/4/index.html","506c163226ddcfcf9bab7933e7c682c1"],["/page/5/index.html","38fcad47e9e70bb0443850f33b96b164"],["/page/6/index.html","895d184d868a7856061a7f417b9cf3bc"],["/page/7/index.html","53e35cc0275013cd27a1748f7ac5454d"],["/page/8/index.html","9a51fb7a8419644e64095d126d9f292d"],["/page/9/index.html","eced4e6374f907a42126d7edc7e6058b"],["/sw-register.js","57af8024d087d1e4b5f0aa3b78dce9f4"],["/tags/AlexNet/index.html","513439044c21ea448e1f4b5d265062e0"],["/tags/CNN/index.html","d4980ca71ba851b4673153e1174b1142"],["/tags/DCGAN/index.html","8bfa6dc963ebdad8dd27008d2a7117dd"],["/tags/DDPG/index.html","d06a0811634f41432adafe3e1e6c0761"],["/tags/DDQN/index.html","6c5039fa6144f173c3c9728005665f56"],["/tags/DQN/index.html","022494fcebf68464c4e4a213545b6a66"],["/tags/GAN/index.html","9cd50932aa794444f81a6059e771e815"],["/tags/IRL/index.html","9b3fddb83de500f3d53a20a93e608ac7"],["/tags/LSTM/index.html","eb710ab82678a18e00866c95dc316cf7"],["/tags/LeNet/index.html","0eaaca5a26ee08f54db470753b41d4a2"],["/tags/MC/index.html","07735f9d26b80c55298395e9fa4ad232"],["/tags/PCA/index.html","36e0b5e7f7d0f149e82e4bc6e223e582"],["/tags/PG/index.html","766f8d64fac306bec9fffe2ee604cfb0"],["/tags/PG3/index.html","8e15cb10b2c704c28c91e901556ec8de"],["/tags/PIL/index.html","c747a7f166bf41380c6ee5e2478f7bfc"],["/tags/R/index.html","b1b727365003230c36a1c14f363eba13"],["/tags/RNN/index.html","f6e5c318686815c3128760154313d23e"],["/tags/SVC/index.html","93d8417a297e3250de8dbddd1658cec5"],["/tags/SVD/index.html","07aff166de8918891a9068eeac1f7323"],["/tags/SVM/index.html","069b073caa46c25f431a89215453ef0e"],["/tags/TCP/index.html","55ef0c5cb9e8f5168cb9e2ed33170902"],["/tags/TD/index.html","6439054ffc6f054e04128a4f3c514abb"],["/tags/TD3/index.html","35e11383fdda11afc9fc42c31b8a8bd6"],["/tags/VGG/index.html","eb3deed57ad7b70ce6ed01e86b66e778"],["/tags/amd配置/index.html","beb8c55f5d2df8edee165febd667d205"],["/tags/anconda/index.html","42ae9bab05575079d11f3c308e6449bd"],["/tags/conda常用命令/index.html","c4eb9c41ec4f5f8e28c9236c2412784f"],["/tags/cuda配置/index.html","d5ab1fd6f5bb4a15a974d07cf119c793"],["/tags/ffmpeg/index.html","04d991a295ed44d9a85533fc3714ee1d"],["/tags/github上传代码/index.html","487577ea0e06a7c8fd11ea3e99ec1003"],["/tags/hexo/index.html","91f345e4d3e3111ba9babfd3c3da436e"],["/tags/index.html","51213ed4b7dabfb270a274c04af34db8"],["/tags/java调用C/index.html","3606ec42243f1044bb45f5aee7a1c3cf"],["/tags/kaldi/index.html","dcee13b1544104f914e58fe37b47162c"],["/tags/linux命令/index.html","ee03864c2508b6b005e8349b282ce1e9"],["/tags/markdown/index.html","2b2bf3e89dc5f96134b2e2f37e08c52b"],["/tags/matplotlib/index.html","871211e165bdbc1c2d5d27598c5d28a6"],["/tags/numpy/index.html","874e1f2f073d6be08e8366acb40de215"],["/tags/opencv/index.html","948a68c2aaa84ca0633df08986628542"],["/tags/pandas/index.html","5a44536bef201a588b92f8d5dee6c93c"],["/tags/qq/index.html","45a7182883e7bcdf3e157e555798b3d2"],["/tags/requests库/index.html","5d1f2ed2062a37b8ac305956cb3acf16"],["/tags/sacred/index.html","9a667ebacae970631056ba3c8ed448f1"],["/tags/ssh-远程连接docker/index.html","a2f3ce88f9591ea51e3be2f83eb683ec"],["/tags/wsl/index.html","fba9e58413416eb6accff4cb30e422f7"],["/tags/zsh/index.html","dea9205d26c3af66f487b36844ec5526"],["/tags/代理/index.html","f411e1c0397c6b7a572a1bbc672a7a33"],["/tags/决策树/index.html","7e0e48aaf48fb9ca968fbcdd873a4525"],["/tags/函数/index.html","83d49409ca8490d18d0c345a09bc6824"],["/tags/列表推导式/index.html","2f5e75ca2c21680099bd04cb2aefd36b"],["/tags/助词/index.html","224a95f5095162cb885cd1487db346ee"],["/tags/包/index.html","d8b040194b56b4d245f76c48db8ceaa4"],["/tags/卷积神经网络/index.html","a519d55e286dc97bd332c8afa854196d"],["/tags/双系统安装/index.html","27bd4d5f6c337bcaaab604796996b736"],["/tags/反向传播/index.html","04a70b4f5d00d4827bb826cb12619c2c"],["/tags/句型/index.html","56a02d588a98981850b8e550506c229d"],["/tags/可视化/index.html","8bac9e28e1d774e119d97e0aab804df8"],["/tags/哲学/index.html","ad24a2b79f422bfe420e7d124ae5a1d5"],["/tags/图像美化/index.html","12227846e7d7d559842ba959ea199699"],["/tags/图床/index.html","68ccecbba75610006181d889f3b99476"],["/tags/多继承/index.html","0fb89770faa68121005dcf03f926dca4"],["/tags/工具/index.html","cf2a0ea8319cbaf3d47329be7304a167"],["/tags/异常/index.html","0b2536c2d5638bc024cd8d29c664c956"],["/tags/强化学习/index.html","49b1fec4aff2cd9746144ffcfec5186b"],["/tags/心理学/index.html","6e9099c694df1b5321742cdcb8c3aca9"],["/tags/感知器/index.html","b4bc9e4467a60de5454ad872f6245680"],["/tags/换源/index.html","88686701760266e00808e7dc99fa1393"],["/tags/描述器/index.html","9dade6c9937bdfe4fc0e5bf51f2746f0"],["/tags/敬语/index.html","ef64eacca92f90a664698e5b414a1417"],["/tags/数据集/index.html","b66cd1fdf6b6e1da2906ef6c8e10f3af"],["/tags/文件/index.html","9caffd4b281681c7e3d1b126b2f0282f"],["/tags/机器学习/index.html","09bde24abbf3dca5e7485edf1493c0ee"],["/tags/梯度下降/index.html","e1e5e9b01a5d7434a33bf3b6fbe78a6f"],["/tags/模块/index.html","ec57722965d712da3c664b79bdf495a5"],["/tags/正则/index.html","afd7dbf6e823916fb4ffb55704f32696"],["/tags/激活函数/index.html","ad572f1137f9c7fe45eb13e6564d056e"],["/tags/点击预估/index.html","53b44f1fc2152408c9c23934bc3e81e4"],["/tags/爬虫/index.html","ed0ea0bc8195ea085c91de7ca5311082"],["/tags/生成器/index.html","e6cd30fcec0780c4e324003ae2955add"],["/tags/类/index.html","0c673ef772d412a5c0bdca4923487e5c"],["/tags/线性回归/index.html","a993af3c5883238f7bf035e0a4e4e01d"],["/tags/经济学/index.html","57a6076b6cafbef02b3f294901e8c9ae"],["/tags/聚类/index.html","6e6a587b649d63d20ee805d60e3802a3"],["/tags/装饰器/index.html","48998cb41e3c99e30f719ad705fb0573"],["/tags/词型变换/index.html","fdab7929491a0683c918e49f707762b4"],["/tags/语义分割/index.html","813207c399b91986d24d792d3f920b62"],["/tags/语法/index.html","d9cb83fccbd444f9602d0ba149675958"],["/tags/语法/page/2/index.html","e4a5266d35e3216281b4579f9c84d0f6"],["/tags/迭代器/index.html","9a6b3f9a2ce6dd6018c57ee7778dc473"],["/tags/逻辑回归/index.html","d564a1789da87acfd1142857d748c55d"],["/tags/随机森林/index.html","640ad02c8c32a3b1c511f2e696b0478b"],["/tags/魔方方法/index.html","1267617e69ed9eabc82e02ac10bd6d21"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
