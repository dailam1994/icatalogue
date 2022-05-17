PGDMP     1            
        z            lashes    14.2    14.1 ,    >           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            @           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            A           1262    19129    lashes    DATABASE     [   CREATE DATABASE lashes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE lashes;
                postgres    false            @           1247    20251    Role    TYPE     A   CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'CLIENT'
);
    DROP TYPE public."Role";
       public          postgres    false            �            1259    20239    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    20293    blockip    TABLE     f   CREATE TABLE public.blockip (
    "blockipID" text NOT NULL,
    ip character varying(50) NOT NULL
);
    DROP TABLE public.blockip;
       public         heap    postgres    false            �            1259    20277 	   changelog    TABLE       CREATE TABLE public.changelog (
    "changelogID" text NOT NULL,
    "dateCreated" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "dateChanged" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "userUserID" text,
    "recordRecordID" text
);
    DROP TABLE public.changelog;
       public         heap    postgres    false            �            1259    20286    logging    TABLE     0  CREATE TABLE public.logging (
    "loggingID" text NOT NULL,
    ip character varying(200) NOT NULL,
    session character varying(500),
    username character varying(200),
    usertype character varying(200),
    "timestamp" character varying(50) NOT NULL,
    action character varying(50) NOT NULL
);
    DROP TABLE public.logging;
       public         heap    postgres    false            �            1259    20270    record    TABLE     �  CREATE TABLE public.record (
    "recordID" text NOT NULL,
    date character varying(50) NOT NULL,
    start character varying(50) NOT NULL,
    "end" character varying(50) NOT NULL,
    "firstService" character varying(50),
    "secondService" character varying(50),
    "thirdService" character varying(50),
    "fourthService" character varying(50),
    "fifthService" character varying(50)
);
    DROP TABLE public.record;
       public         heap    postgres    false            �            1259    20263 
   recordList    TABLE     y   CREATE TABLE public."recordList" (
    "recordListID" text NOT NULL,
    "userUserID" text,
    "recordRecordID" text
);
     DROP TABLE public."recordList";
       public         heap    postgres    false            �            1259    20255    user    TABLE     �  CREATE TABLE public."user" (
    "userID" text NOT NULL,
    "firstName" character varying(200) NOT NULL,
    "lastName" character varying(200) NOT NULL,
    "dateOfBirth" date NOT NULL,
    email character varying(200) NOT NULL,
    username character varying(200) NOT NULL,
    password character varying(255) NOT NULL,
    roles public."Role" DEFAULT 'CLIENT'::public."Role" NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false    832    832            �            1259    20300 	   whitelist    TABLE     j   CREATE TABLE public.whitelist (
    "whitelistID" text NOT NULL,
    ip character varying(50) NOT NULL
);
    DROP TABLE public.whitelist;
       public         heap    postgres    false            4          0    20239    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   �5       :          0    20293    blockip 
   TABLE DATA           2   COPY public.blockip ("blockipID", ip) FROM stdin;
    public          postgres    false    215   �7       8          0    20277 	   changelog 
   TABLE DATA           p   COPY public.changelog ("changelogID", "dateCreated", "dateChanged", "userUserID", "recordRecordID") FROM stdin;
    public          postgres    false    213   �7       9          0    20286    logging 
   TABLE DATA           d   COPY public.logging ("loggingID", ip, session, username, usertype, "timestamp", action) FROM stdin;
    public          postgres    false    214   8       7          0    20270    record 
   TABLE DATA           �   COPY public.record ("recordID", date, start, "end", "firstService", "secondService", "thirdService", "fourthService", "fifthService") FROM stdin;
    public          postgres    false    212   �\       6          0    20263 
   recordList 
   TABLE DATA           V   COPY public."recordList" ("recordListID", "userUserID", "recordRecordID") FROM stdin;
    public          postgres    false    211   �]       5          0    20255    user 
   TABLE DATA           t   COPY public."user" ("userID", "firstName", "lastName", "dateOfBirth", email, username, password, roles) FROM stdin;
    public          postgres    false    210   �]       ;          0    20300 	   whitelist 
   TABLE DATA           6   COPY public.whitelist ("whitelistID", ip) FROM stdin;
    public          postgres    false    216   �_       �           2606    20247 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            �           2606    20299    blockip blockip_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.blockip
    ADD CONSTRAINT blockip_pkey PRIMARY KEY ("blockipID");
 >   ALTER TABLE ONLY public.blockip DROP CONSTRAINT blockip_pkey;
       public            postgres    false    215            �           2606    20285    changelog changelog_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT changelog_pkey PRIMARY KEY ("changelogID");
 B   ALTER TABLE ONLY public.changelog DROP CONSTRAINT changelog_pkey;
       public            postgres    false    213            �           2606    20292    logging logging_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.logging
    ADD CONSTRAINT logging_pkey PRIMARY KEY ("loggingID");
 >   ALTER TABLE ONLY public.logging DROP CONSTRAINT logging_pkey;
       public            postgres    false    214            �           2606    20269    recordList recordList_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_pkey" PRIMARY KEY ("recordListID");
 H   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_pkey";
       public            postgres    false    211            �           2606    20276    record record_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY ("recordID");
 <   ALTER TABLE ONLY public.record DROP CONSTRAINT record_pkey;
       public            postgres    false    212            �           2606    20262    user user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("userID");
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    210            �           2606    20306    whitelist whitelist_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.whitelist
    ADD CONSTRAINT whitelist_pkey PRIMARY KEY ("whitelistID");
 B   ALTER TABLE ONLY public.whitelist DROP CONSTRAINT whitelist_pkey;
       public            postgres    false    216            �           1259    20314    blockip_blockipID_key    INDEX     Y   CREATE UNIQUE INDEX "blockip_blockipID_key" ON public.blockip USING btree ("blockipID");
 +   DROP INDEX public."blockip_blockipID_key";
       public            postgres    false    215            �           1259    20315    blockip_ip_key    INDEX     G   CREATE UNIQUE INDEX blockip_ip_key ON public.blockip USING btree (ip);
 "   DROP INDEX public.blockip_ip_key;
       public            postgres    false    215            �           1259    20312    changelog_changelogID_key    INDEX     a   CREATE UNIQUE INDEX "changelog_changelogID_key" ON public.changelog USING btree ("changelogID");
 /   DROP INDEX public."changelog_changelogID_key";
       public            postgres    false    213            �           1259    20313    logging_loggingID_key    INDEX     Y   CREATE UNIQUE INDEX "logging_loggingID_key" ON public.logging USING btree ("loggingID");
 +   DROP INDEX public."logging_loggingID_key";
       public            postgres    false    214            �           1259    20310    recordList_recordListID_key    INDEX     g   CREATE UNIQUE INDEX "recordList_recordListID_key" ON public."recordList" USING btree ("recordListID");
 1   DROP INDEX public."recordList_recordListID_key";
       public            postgres    false    211            �           1259    20311    record_recordID_key    INDEX     U   CREATE UNIQUE INDEX "record_recordID_key" ON public.record USING btree ("recordID");
 )   DROP INDEX public."record_recordID_key";
       public            postgres    false    212            �           1259    20308    user_email_key    INDEX     I   CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);
 "   DROP INDEX public.user_email_key;
       public            postgres    false    210            �           1259    20307    user_userID_key    INDEX     O   CREATE UNIQUE INDEX "user_userID_key" ON public."user" USING btree ("userID");
 %   DROP INDEX public."user_userID_key";
       public            postgres    false    210            �           1259    20309    user_username_key    INDEX     O   CREATE UNIQUE INDEX user_username_key ON public."user" USING btree (username);
 %   DROP INDEX public.user_username_key;
       public            postgres    false    210            �           1259    20317    whitelist_ip_key    INDEX     K   CREATE UNIQUE INDEX whitelist_ip_key ON public.whitelist USING btree (ip);
 $   DROP INDEX public.whitelist_ip_key;
       public            postgres    false    216            �           1259    20316    whitelist_whitelistID_key    INDEX     a   CREATE UNIQUE INDEX "whitelist_whitelistID_key" ON public.whitelist USING btree ("whitelistID");
 /   DROP INDEX public."whitelist_whitelistID_key";
       public            postgres    false    216            �           2606    20333 '   changelog changelog_recordRecordID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES public.record("recordID") ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_recordRecordID_fkey";
       public          postgres    false    213    3477    212            �           2606    20328 #   changelog changelog_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_userUserID_fkey";
       public          postgres    false    213    210    3470            �           2606    20323 )   recordList recordList_recordRecordID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES public.record("recordID") ON UPDATE CASCADE ON DELETE CASCADE;
 W   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_recordRecordID_fkey";
       public          postgres    false    212    3477    211            �           2606    20318 %   recordList recordList_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_userUserID_fkey";
       public          postgres    false    3470    211    210            4   �  x�u�Mj\1��oN1�����9DN`0RKC�*���vlǎ�!x-J|U]A�n��K�)���Z�X<�5^G�"�j[N�{D���}sT�]��0�:��4fИ�zЂp�z%��\D��~ <߂"@���?<>�~迎����R0�g)���F�Q��B��� ��מu`@�q���2����g�
A���=D�ǎ�Vbo�o�g�+����C�E���eE����!�2q�"��$���r���s�lI��O��Q�lۨ;Mr;;l��P{����D3���N�������̀`�*��l�3�6v������E���5��6���U[=f�}�j
rۍ���0f�^�W\a��nNY�(�@�JAza���C�A���q���&#��}��f[�̈�>�*��Y��;�ucև12�����c�Rd�y"�����f���;���}���s!9CR�U�B!�w�)ש��5�O:�6�Fw9�NO�g�      :      x������ � �      8      x������ � �      9      x��[S�I�篻?�����UY�)'QAD�CL�uQN
L��>Y����Ù��DTt��g���U<���)p� G&J��G��+V�?������^��r|^/�=8�:9��{�����ރ�}�S�~��.��K�<�����{�u������ӓ�{.ϯ�ݻ���\^��Ʌ|��7�������oT>�ǧ߿����������"o�"��n��|pO��Я���>��t$k��|~�岖���M�N���6���7��v?�:�z����G.�ѓǇ���S�����F��<����9�:���E=ￕ��ݢ�M�X�L�FS!�l���Rb�Z�f�O�~�������os*����g�ӽ���?���}���E�ՁrLx`�d]x�������)U��YT� &�Z-�� ;���}����:�����*	���C��mbjN縲hO��}9�ok|�������͕����;��f����_���sn�����ú�n[o���_�ggׯ����?�;m]?R[�//?�Z�X7y�ߍ6s�ژl:��U�C��B���ِ�|X�x��T��徢�cr��:���4��-�����	��	�H� �`P�֛�?�v6dI�1�w�o<�8���#{$�PU� 'Y���:�J���k�7L��w�-V�F��ﵘ,�(��KcY�r�J�����v�������z=-��/���/�ُ[g�"���-�vZ�=������������+����mz�N�_���x�*~Y�U"K���]ȥV�$�qj�$@V]%[�`k"���v��	��4��F+!q6.+ ��h�+��h]09��Bye����;�y漅������;�/?�n�?�=>��.�"��禿�v��>�����Ӻ��b���맻G[�������Nn����*�ZR�p;���l���,�U��_*����f��Y�S`�lE�55T�,(��ǵBѡU�1��*�|��6�m���}�ۃw�$QB>x���/�{�E�w�M�x��k��+���>�xx���]o�yݺ����|���Z�\�f_�Y�@��ZZ�DɆ�����I����b㶺'Q��њ0���T���P9Q�=N�d!)'�[l�ue����6�}�l��z���}'Onn�n�糏�O��E�w�M�ӷ�����7���:m�����������~���?�~z������ʐ�b��'y��q))�*d�i�f`�dmWr��+�����g��C�~����[Gt���˽�7g���/��7�M;�~����yϾ����ë'������`�띏�7o�6�?����UBkK��ic"־)�;�"�X��D�E�dgB��I�et�C|2Y,5h`Q;�l\}Ҧ�U%�nO������Λ~������om�l\>�m��/o�~�ܔ�c�!>JW;�|v�.6w_#���G��n�*�}�x��C��+�E����B�V�(�E���Z�UA1�Z�Y��F;����ѓ��u�`3�W�AB�j�S��%��d��>켽����;{�{��{D_7���^�ܬ��%��<7��_o>��������:���/�}yxzx���4=_��t�����ѱ����ō�S�j�~
%;.k#&���rXSYYE;�����S��Ǎz��l7LW!Z����Iv[Ǥ���u����(��֜������)%��uP���p���0yZl��J$%��NFl�W���g�e�X�Av.d�p2��(Uu�Z��!!FY�Q��W��g���l��.N}��'%�q*��A����\,��>�����E���e�%��~�:|b������o�����i3n���W���/���o�o�o��p����������o�O��*��PO�6[��19�Ƭ%�Jj�5���ƕ�~d"��r�;Y6���\@4��X{"T��j�u~��Y7��a��ޫ�
���; ��ƛ��(��Zd�B��D~�S�Z�,/�U^�^�~����F�g�bӃ�<Ț~)`�7y1(n�"�"/C�A�F\���x�к��[m�-gyA0\+HP%޹��X����&V�?���{'��&b6��b��y�6ֱ*ye��բ|h�i�g���Œe�����U�ע��^��?�5�Ee�r�Q��ĨJ��eUC!6�%�Av>di2nq��kB�3��UQ>� c!�V)5��~�V̇l?a\�V��D��۬�,����]H(�8$[ٹ�5z�aY���\G��	2A�9C�������E{���Nٰ��Z/7^�p��ݬ��O/?�=�%��=7���ϯ�:��>=�w�mț�����{|{��]��Y%�xBم�)&�fH�O�u �x^Ȋ);��p+�iٟ�ډ��[\�5K�U�jV^�-@U�l<zoVV��?������iI��8 H4�s+T6}׵5E�^٬��'�~2f��VUN9*��#`/�eĊ+��N�l�L��i�ˮ�ڻ>�x��~���������|�~E�w�M'�o_�yy��ة����w���{� ��������S_��UJ*�VO�,�c���#mT{����z>��Z�Dye��A�'�a�j��cM�6�� �u�\A�͘P��ͭd�I����/��-^;-+�(+fY�C�-�J9��A�@�Z7��Yt�s٨���0�(#��ߴ*6P]�$�A�'�<��F]�%'��^��{�l�.yeb���ʦͼ���������7�jxs�%�<��O�^��]|˯��+��{n��g//w�o����O_�ó�G����?����[��B�<z{Q��?�R��v���	��8AHN�,�ث�
�6�Ja��|.+��:���,�	{��MK�87Х����!��]�&q�1�����OpqR�0[]IP� �*��5�k��1�Zѹƭ�!�k}����۵˧�<�z�������O�N���/��ܴ�?<�y�i�v���X��Pڇk��.oˋ㧗��v��j�6�Yߛ1�e%HɤMoƘ���h��-J$�M�h�[�ۼG�>\c988�z����EF�k���7������"��禽�go»'{7=��������y�w��>��W'��9Y���D�q�� ʨc#*�,1C�('�K%�ƕմO����rz�y��d��ɗ�G�N�] �l5<�E�w�M/��^��_���qrt�>�~��;x�����~����]�p{����MȆ�FH/s�U@�3G��E�&I� �s%~jAY�������	����'����:�=���nն�"���7o������<	���>>U����5�v���ӣ���ϛo�ھZ)��=�^��3��z]^�P�Q�l6�$��>;��D�O��]���J��B�~x�! W� ^�%Ҳ�ڕu����Z?��F���֩{��޷��F��i3%�^θ����'��w��x����yq������ۋ��J]��/C��=7}�|�G�'/���׷k���o]�<�+?9|�����a�Ï϶��*��|�T�Hb��S�ނ�0$�C�h�r�>���g�Ǉ���C�����|6������k7[��o>����7�M_޼;�z�����}��w��������ų�W/�l�uCs��k�B��c�L^�2�-��Q/��T�s(PM	�ֲ����?��i/f�e�)�껦�=�f��&%�S�3%V��x��'�;o,ƹȇ�Y+��T
�=Bf��/Wـ��+�?���DI�x�V��E�h�g���-k%��X� ;�����M>d"~���<9�`uI��~uۑ�?����.�RR�ȻC/��G8�(��h������g��'Yz`���Y/2�b������U�P��1��Y�p�7Z����n��c*�V%R��ٙ�uM~�~�X�Va�R���
Ro,[��)����x��Ɋ��9/�eѳ^������OD��zr�'�!K�w:y
�={Y��\�����_�9cV6q���l���f}��6C�M��1�l��1AET:dgB���ol��P�!5:`O��)i�U��k�%�8]�Y��2Jb�����f�"��.r�    �T	��a쳳!k��xQ܃�I4%��c�}"��:21����}d�E֚�.���`�H5���9����H|�
�Qt�j>diR�l=�$jRExR��E�+dѷ�w���[�5���,?PvRny?��r� �6�Y ���(��j�b�<r*fDVT�_�ƥ���}��>��ܳT�`����d�B���n�ƚZ+� 8�[~%�(����d_Bk+��8���܇[j7�RϦP|`�b+%h��ub�-$�Y�׬l��A��dN�$��q�QKl�[ϓW�0wy�մR����f�#^�dB�F}Aoj�y-6
ɆF�τ�}@j�jy?�S�dw%��M%�^"��|S(�8��Y3��e��a�b�U=w!���Z�*�qu[X�?��g�Q+���A�� C��gu��<%�b5rgB�f
��KF��9��F![}�[�1�~�<�Ά,O�-�e����sG)��m�lo�ռ��`n~��͆,z!K���	�%�>�RCj�� [_=UgV��� �o�w�Ƌ��$1R4VTO���Փ�dZk�[�$��?���&z��P=:�m������$6k
%�J^�Q��Od��]�l	�8r
;ӽ1Jlܛ��)����CV��/c�ҧ�i����v��$�);"����څ�֪�5�@����Z)����1z�\�j��Yc'���h�6�W-h�[J�Q��z�c��xe���?�������]wE�������._!*	�ȇ���]نP���Z3.#(��z�:M[�Y
�u�k���
��J�Y�Բ�L���>�2�B��D�Kv<2�fD�Of�-cUV���'D [�}֊KnQ'��cgP�!�j����⃝�J�z����Il���j�2Y�jNd�-c�*��O*��-��{������u��2z6d��>\���a*�6�Vg!��g{�eNZQ�6;��C�����R}q�*���.El6�Psk�#'d�C�O���ZΡ�cPlY>�
�����x�A͇l1��Y��FSz��S������an�đ�8����XZ�5{��w5d�7�]pS.(&�.97lv6d5N�l7_�쳩�k�c]�S��/`{נ詢��|�J��$���*�gM)�aP�c+ʥ8b�����}������I�|�S2B29�����QUzt ��~���ń���ms�7N�s������|���8#�n�K�9fU��{+\��ZI�'���Th��̄�ﱱ�n��MY����E��~�׸�j�J0-���|Ȋ�������Y]����2+ Qc�� ;��z�rB�sلf�&o���LF�R���Qs>dyB\NF��5�w��`<0kF��>��i��Ά,z��ܲ�A�]�e�ͻ�������ѻ<n�fB6��yy?�,{U{�ѳ�pN���l�fO��}>dE�,o��u��%� �^e���E%�F�|�Nfفĥ�RS����E٦V3����Z����C�'ҋ��`S�}�e�WY��I^DmL�E�Z�:��<�j�@����s�$!p���~VlV�h̊l.czڌȺ)��颪�'���Mb����z��kܜ����|���]��\�d�mZ�R,�z�"G6h�=;�VM��.�E�R$��r��	���ѱ�2�o<�n�eVj��TkD-[,�,�٬ S2ؚ3���� �g�[���XP� z�+[�"x	�����Aͅ�sol*Ǧe��%����-n�
1CN�Av>d%6^f�y����p?�H�CHY�¡���l��>�e��˃?m#�Bm`�˞�N6�⠊ j&iGi���a�����	�Z�,+�T2�\K�rr��l�Je�8�;�Ek��^�|�Jg`�r�q��s��>��A�j"���Rb��e	S�ޟ�S�1S��+���΄��]�X����
��&A��
�%Y�y������g>h��e�vK)�5�aL�I4A⊹4�y$�φl/{_&̴X=��@;�G��Y?��^���q�7�f��/�qK�D�]�֞r�e}�Jي��H��	Y+p�>`́t�w�8��=�R	�n���+��v6d���	3�$w�Y�ƞ����$�
��j�k	�ǐ�ِE�B�qS��R����{U0�"P�Ii5�|�
�e�jB-A���t�A�
$WDǱb��ȫ�Y�I�qQ���2cI��ր:���"{t�]e�9��x&d�򓨙�̞��Zb��m��4�Y��!�l���.l6h1֒
T�����C����6�gC��d��J[r3�7,F{�:Hv[Y)�dT�<��烖&�S(�]ɐ�}졆�b�|f_����lȆ�xy�n��j�d�ņJ4e��l�Ώ�x6h�f�.�6��ME��z���̽˱�kV�dL#�q&d�.��څ�2	�}� *ߍ��e_ �BMt��u��A�&���)l�z� W�*� l�LL���� ;��MHˡ������V�}2+� [R�4TcX�|Ȇ��Ȇj���.��W@�	{�;WZ�L84�lТ�P-{�Yŵ��Pꮽ&z^YȪ媜����x6d	'���e��L���3B ��AǱ5֣{�|��������A�����YC�܂�Mf��ù�uMd]r	�8��� ks{W���=�VP��P3"�/�*�$�Z����c%�JQ�l|Vk�� ;�FM��"8N�}ɦȊ��d2�H9 뼨�fD���Ak&�,~�:V,�@�^ny���z�%e�դqdC͇l�.KP�>p}p4�w�=�(��d���g���I�E?\�B�(Y9�i{7�h*����V��ʛY��Q~MiY����ќEъ�u�����t<��3��í�V�@s���>$���/�U���C�ҪEB�/5�q����� �졗F+�r)�s!�f2� �����,&�q�}s�b�%��i��YғgZ��
1�ؓ{H�RB-pХ����3!{�e���f}Q��f���~'� y� Z��N4�Ά�Q�s���R�7�5x�.j����A�!ǣ�l����zqUD��ޥ"�~��>C��G	��gc�mόȆ������*O��G"(]�O|O��V�K�ʎ3�ِE=�rm`�M���u}&S�(��Vz�Ө�Y;i6K���`�|�*�DJ��V�w�{x�ψ,N̋|�X[�E,�r�ZIl����d�5�q\�̄��]S���dr�A���}B^�b�^��Kb�J�C�O��E���HE�젅�8Yv�r6��8��Y7��>k	=炽����罘�j`Mll���̃�\Ț��b���i(RVq���A��_*jξ�wV#6�Y�a����K��h!�As�,�G�1mkFd��~y?Ie��k��XgHNDE%R6��87�Yk'���f�o���H����{���-3����hY"�JD��I�!6!�'E-?JK�F`6dQIl�8�@Ubl�h��@�9��N�\K��5�Ά��ެ���R��8���_$Hň����U��lȒ�Ԓl1.�^J��������}�{V9���o<�<�eVj#�l�.�{!^PɁ���W�Q�>���0�I������l�A�Z6[_LC+��P=�!�a2˓
��R��n��e &���*��͸y�	Y�9�V�,!�,��T��`�������NC�Άl������U�Yrϩ��hBQ��TE߆�z�C�OL�[��|�YY��	$���✕�s�f��l����y�Z���h�m�*@��MJތ���������e-�آ[�A������jo�P����Bv}����Ɵ��P)�X�0 �l��
#fU��v&p�Kڿ
P5���%AT+R��F�fQ�qE;�v�z�Y��>y	����O�Q��"V�Ə�x6d���[&��TP�j���݀��m�����Ōc�ِ�4��<�I�T��}�N3����5����7�d{��A�� �X�)�]�/[l�F����!��G/'Ex��Q=dB�"|�e�,�D9��ڐ��!�/�����h�E>&*H1��$���G�|����C&�T�A�b�5Q�C�
�DY�.�Κ�!Kj2��cS<��"|j �  ����<V)����!��P&�d0���AY%�-�*Ii��{dgC�'��c�-
Cv�g�b���3FZ��]��(�\q�J-��ѥ�e��"W�y�O5�d� ;�f�	Q��V�ib��3�@`R%ŚI�&�s!��0)��YÜ��7ݍR�>h�6'�
S1�F��l�����V������ǖ�AT/�cU����!�.Nai��9.J<p�VFaso�X����9#�~U�JZ��l%+n��+7�/�b��Cn[�l�Z��V����EB���K� �T��*�aãd>d%�Z�,���i���7f1�������j)8�gC�����T6���zD�Y�S-��M�P�b;��fB����#Qt.VJ��jLQ)��b�6�·���q�Jd�d���s�3c�f�w���4�l�lȒ�j��8	Y����m��rR�TS��x>de�]�sk)6l&��5�a��jcB�Ԝ�1pk.dCOO���w�D��,�+�}�=kCJ^q��ِ5zrj9$/'�5i���$Ɔ�;�������χ���2��yUT�Zr���s}F�,�T�,k�3��e��e �1e�l���T`����[����8��'Z�奐�HY�LVT����ʺՐk8�z�C�&^Nx!6ճ��� uDQG(Y'֩4�G��lȊ���:� viA�k?]4!�>OZ�d�6Ύjd��>lz�W��P� P�dS(f�ص$5f
̇l��a�zHդu� ���Y�g�i>*��΅�г�!&��ujv�-�ˮϵ�ĞD�����4&�͇,�),�Z
�Jt��i���Xp"�8cqt#�Y���26&��Ah��Op�ٸ��9t-k�6;�a
�˶
�-6��J������*d�3�BV��L�����N�r���½��>T ��v�(��ʶ���6׿ezt�)�o�Gn��<������d�Wh����ًw��ysw��w�wwO6����z����v��y}�ȩ���g���dkt@& `P�O#4�bs���N�]{���{�O�O>���I�~���/�p��c$-s��z��$@_���3'���Ȏ;�΍���_�fr��N���E�i�I^�.f�Y��wn|y�v��4]RP��K,Y��,c|Ftήnj����aB��� V��J�?�
)�(jW�:�dV�pj����89ǋ �M����))8�      7   �   x�e�M!F�p
=@Mw`�p��t������IL�����'��W�@5
�:���6�4�h:�����l�8p>����� P_��=7���;�::���C��Gܔ�!�����F���׺в����%�0�]�9*�E3��Jd�l�h��K�4�Wj�;k��[Cy      6      x������ � �      5   �  x�M�˒�0�u|��!����ڀҢc[�IBPh���>�`�VYu9竟3���.��`�&��U�.�V���J�t����̚�u v � �N~lK�H��G �Du1�nV�-Y��uŖ�+�i��|�j��?r~_��S���!�9hL��h��$�(�&��Ji9���Hm��H����jYU��][�h	P���>I�up��UVg���.��[>��P4�O��M(Xt������Q}��'�0�PN$�F@��RJ���IS�e,��t�_�w��%sИ�M�������v� ['yYd�����]���f+��&>��7T��K/^G���%�$�6�A�����JB	LeʤM�f�Y׶��Ԁ`B ��������R�&��w���N��գ���(����σt+��Я�8�[c-��r|6�u:�X˯�      ;   T   x����0�w��#�@/~ ��K�q����N����pF("
���t��Fu�ŕ�<'�x�\�G�멥��tD���     