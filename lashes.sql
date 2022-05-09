PGDMP                 	        z            lashes    14.2    14.1 '    5           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            6           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            7           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            8           1262    19129    lashes    DATABASE     [   CREATE DATABASE lashes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE lashes;
                postgres    false            ?           1247    20146    Role    TYPE     A   CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'CLIENT'
);
    DROP TYPE public."Role";
       public          postgres    false            �            1259    20134    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
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
       public         heap    postgres    false            �            1259    20189    blockip    TABLE     f   CREATE TABLE public.blockip (
    "blockipID" text NOT NULL,
    ip character varying(50) NOT NULL
);
    DROP TABLE public.blockip;
       public         heap    postgres    false            �            1259    20173 	   changelog    TABLE       CREATE TABLE public.changelog (
    "changelogID" text NOT NULL,
    "dateCreated" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "dateChanged" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "userUserID" text,
    "recordRecordID" text
);
    DROP TABLE public.changelog;
       public         heap    postgres    false            �            1259    20182    logging    TABLE     0  CREATE TABLE public.logging (
    "loggingID" text NOT NULL,
    ip character varying(200) NOT NULL,
    session character varying(500),
    username character varying(200),
    usertype character varying(200),
    "timestamp" character varying(50) NOT NULL,
    action character varying(50) NOT NULL
);
    DROP TABLE public.logging;
       public         heap    postgres    false            �            1259    20166    record    TABLE     �  CREATE TABLE public.record (
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
       public         heap    postgres    false            �            1259    20159 
   recordList    TABLE     y   CREATE TABLE public."recordList" (
    "recordListID" text NOT NULL,
    "userUserID" text,
    "recordRecordID" text
);
     DROP TABLE public."recordList";
       public         heap    postgres    false            �            1259    20151    user    TABLE     �  CREATE TABLE public."user" (
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
       public         heap    postgres    false    831    831            ,          0    20134    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   �0       2          0    20189    blockip 
   TABLE DATA           2   COPY public.blockip ("blockipID", ip) FROM stdin;
    public          postgres    false    215   G2       0          0    20173 	   changelog 
   TABLE DATA           p   COPY public.changelog ("changelogID", "dateCreated", "dateChanged", "userUserID", "recordRecordID") FROM stdin;
    public          postgres    false    213   d2       1          0    20182    logging 
   TABLE DATA           d   COPY public.logging ("loggingID", ip, session, username, usertype, "timestamp", action) FROM stdin;
    public          postgres    false    214   �2       /          0    20166    record 
   TABLE DATA           �   COPY public.record ("recordID", date, start, "end", "firstService", "secondService", "thirdService", "fourthService", "fifthService") FROM stdin;
    public          postgres    false    212   �2       .          0    20159 
   recordList 
   TABLE DATA           V   COPY public."recordList" ("recordListID", "userUserID", "recordRecordID") FROM stdin;
    public          postgres    false    211   W3       -          0    20151    user 
   TABLE DATA           t   COPY public."user" ("userID", "firstName", "lastName", "dateOfBirth", email, username, password, roles) FROM stdin;
    public          postgres    false    210   t3       �           2606    20142 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            �           2606    20195    blockip blockip_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.blockip
    ADD CONSTRAINT blockip_pkey PRIMARY KEY ("blockipID");
 >   ALTER TABLE ONLY public.blockip DROP CONSTRAINT blockip_pkey;
       public            postgres    false    215            �           2606    20181    changelog changelog_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT changelog_pkey PRIMARY KEY ("changelogID");
 B   ALTER TABLE ONLY public.changelog DROP CONSTRAINT changelog_pkey;
       public            postgres    false    213            �           2606    20188    logging logging_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.logging
    ADD CONSTRAINT logging_pkey PRIMARY KEY ("loggingID");
 >   ALTER TABLE ONLY public.logging DROP CONSTRAINT logging_pkey;
       public            postgres    false    214            �           2606    20165    recordList recordList_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_pkey" PRIMARY KEY ("recordListID");
 H   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_pkey";
       public            postgres    false    211            �           2606    20172    record record_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY ("recordID");
 <   ALTER TABLE ONLY public.record DROP CONSTRAINT record_pkey;
       public            postgres    false    212            �           2606    20158    user user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("userID");
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    210            �           1259    20203    blockip_blockipID_key    INDEX     Y   CREATE UNIQUE INDEX "blockip_blockipID_key" ON public.blockip USING btree ("blockipID");
 +   DROP INDEX public."blockip_blockipID_key";
       public            postgres    false    215            �           1259    20204    blockip_ip_key    INDEX     G   CREATE UNIQUE INDEX blockip_ip_key ON public.blockip USING btree (ip);
 "   DROP INDEX public.blockip_ip_key;
       public            postgres    false    215            �           1259    20201    changelog_changelogID_key    INDEX     a   CREATE UNIQUE INDEX "changelog_changelogID_key" ON public.changelog USING btree ("changelogID");
 /   DROP INDEX public."changelog_changelogID_key";
       public            postgres    false    213            �           1259    20202    logging_loggingID_key    INDEX     Y   CREATE UNIQUE INDEX "logging_loggingID_key" ON public.logging USING btree ("loggingID");
 +   DROP INDEX public."logging_loggingID_key";
       public            postgres    false    214            �           1259    20199    recordList_recordListID_key    INDEX     g   CREATE UNIQUE INDEX "recordList_recordListID_key" ON public."recordList" USING btree ("recordListID");
 1   DROP INDEX public."recordList_recordListID_key";
       public            postgres    false    211            �           1259    20200    record_recordID_key    INDEX     U   CREATE UNIQUE INDEX "record_recordID_key" ON public.record USING btree ("recordID");
 )   DROP INDEX public."record_recordID_key";
       public            postgres    false    212            �           1259    20197    user_email_key    INDEX     I   CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);
 "   DROP INDEX public.user_email_key;
       public            postgres    false    210            �           1259    20196    user_userID_key    INDEX     O   CREATE UNIQUE INDEX "user_userID_key" ON public."user" USING btree ("userID");
 %   DROP INDEX public."user_userID_key";
       public            postgres    false    210            �           1259    20198    user_username_key    INDEX     O   CREATE UNIQUE INDEX user_username_key ON public."user" USING btree (username);
 %   DROP INDEX public.user_username_key;
       public            postgres    false    210            �           2606    20220 '   changelog changelog_recordRecordID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES public.record("recordID") ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_recordRecordID_fkey";
       public          postgres    false    213    212    3473            �           2606    20215 #   changelog changelog_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_userUserID_fkey";
       public          postgres    false    3466    210    213            �           2606    20210 )   recordList recordList_recordRecordID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_recordRecordID_fkey" FOREIGN KEY ("recordRecordID") REFERENCES public.record("recordID") ON UPDATE CASCADE ON DELETE CASCADE;
 W   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_recordRecordID_fkey";
       public          postgres    false    212    3473    211            �           2606    20205 %   recordList recordList_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."recordList"
    ADD CONSTRAINT "recordList_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public."recordList" DROP CONSTRAINT "recordList_userUserID_fkey";
       public          postgres    false    211    3466    210            ,   �  x�u�[��!���^E���jU/"+�R�!�S �{27f�ң�|��X�֋�AP(6���>p�Q��`W
7�1��Ү�o)(�<ܳC��\9��B�e��}���3��vq��~ �l�w���t�}�_�������"V�K�=�5e��Ehf���*�N�H�0�h`Sj�5!.F�іQ�LD|�I�;�b��ʇ�v&��\�^���V���/�����Ǝ��}n����"SW��D�Mr�j��h�!z���0a�r�i����jQqN���9! G�W }wAza0���!��>>�?�3��W}E��h���)=�b�'�	ΉXԅ�}s��}���J�y �'���}1{�dXA�3G�������*]h#��a�ߩ�����nxE�p9�N�c6�6      2      x������ � �      0      x������ � �      1      x������ � �      /   �   x�e�M!F�p
=@Mw`�p��t������IL�����'��W�@5
�:���6�4�h:�����l�8p>����� P_��=7���;�::���C��Gܔ�!�����F���׺в����%�0�]�9*�E3��Jd�l�h��K�4�Wj�;k��[Cy      .      x������ � �      -   �  x�M�˒�0�u|��!����ڀҢc[�IBPh���>�`�VYu9竟3���.��`�&��U�.�V���J�t����̚�u v � �N~lK�H��G �Du1�nV�-Y��uŖ�+�i��|�j��?r~_��S���!�9hL��h��$�(�&��Ji9���Hm��H����jYU��][�h	P���>I�up��UVg���.��[>��P4�O��M(Xt������Q}��'�0�PN$�F@��RJ���IS�e,��t�_�w��%sИ�M�������v� ['yYd�����]���f+��&>��7T��K/^G���%�$�6�A�����JB	LeʤM�f�Y׶��Ԁ`B ��������R�&��w���N��գ���(����σt+��Я�8�[c-��r|6�u:�X˯�     